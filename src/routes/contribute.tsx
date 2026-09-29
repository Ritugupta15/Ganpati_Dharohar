import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Copy, Loader2, Sparkles, Upload, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { PageIntro } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GALLERY_CATEGORIES, mandals } from "@/data/heritage";
import { suggestCaption } from "@/lib/caption.functions";

export const Route = createFileRoute("/contribute")({ head: () => ({ meta: [
  { title: "Contribute a Photo — Ganpati Dharohar" }, { name: "description", content: "Upload a Ganpati heritage photo and get an AI-suggested caption and category for the archive." },
  { property: "og:title", content: "Contribute a Heritage Photo — Ganpati Dharohar" }, { property: "og:description", content: "AI helps project contributors caption and categorise Ganpati heritage photographs." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ContributePage });

/** Shrinks the photo in the browser so uploads are fast (max 1024px JPEG). */
function resize(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const s = Math.min(1, 1024 / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
      c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
      resolve(c.toDataURL("image/jpeg", 0.82));
    };
    img.onerror = () => reject(new Error("Could not read this image."));
    img.src = URL.createObjectURL(file);
  });
}

function ContributePage() {
  const run = useServerFn(suggestCaption);
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [mandal, setMandal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const onFile = async (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return setError("Please choose a JPG, PNG or WEBP image.");
    setError(""); setCaption(""); setCategory(""); setTags([]);
    try { setImage(await resize(file)); } catch (e) { setError((e as Error).message); }
  };

  const analyse = async () => {
    if (!image) return;
    setLoading(true); setError("");
    try {
      const res = await run({ data: { image, note: [mandal && `Mandal: ${mandal}`, note].filter(Boolean).join(". ") || undefined } });
      if ("error" in res && res.error) setError(res.error);
      else if ("result" in res && res.result) { setCaption(res.result.caption); setCategory(res.result.category); setTags(res.result.tags); }
    } catch { setError("Something went wrong. Please try again."); }
    setLoading(false);
  };

  const entry = JSON.stringify({ caption, category, date: "[Add date]", mandal: mandal || "[Add mandal]" }, null, 2);

  return <><PageIntro eyebrow="For project contributors" title="Contribute a Heritage Photo" description="Upload a photo from a pandal visit. AI suggests a descriptive caption and gallery category — you review and edit it before it goes into the archive." />
    <section className="py-14"><div className="archive-container grid gap-8 lg:grid-cols-2">
      <div>
        <div role="button" tabIndex={0} onClick={() => inputRef.current?.click()} onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onFile(e.dataTransfer.files[0]); }}
          className="flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-dashed border-border bg-card transition-colors hover:border-primary focus-visible:border-primary">
          {image ? <img src={image} alt="Your uploaded photo" className="size-full object-contain" />
            : <div className="p-8 text-center"><Upload className="mx-auto size-10 text-primary" /><p className="mt-4 font-display text-2xl text-primary">Drop a photo here</p><p className="mt-1 text-sm text-muted-foreground">or click to choose · JPG, PNG, WEBP</p></div>}
        </div>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="text-sm"><span className="font-semibold text-primary">Mandal (optional)</span><select value={mandal} onChange={(e) => setMandal(e.target.value)} className="mt-1 h-10 w-full rounded-md border border-input bg-card px-3"><option value="">Not sure / other</option>{mandals.map((m) => <option key={m.id}>{m.name}</option>)}</select></label>
          <label className="text-sm"><span className="font-semibold text-primary">Short note (optional)</span><Input value={note} onChange={(e) => setNote(e.target.value)} maxLength={200} placeholder="e.g. evening aarti" className="mt-1 bg-card" /></label>
        </div>
        <div className="mt-4 flex gap-2"><Button size="lg" onClick={analyse} disabled={!image || loading}>{loading ? <Loader2 className="animate-spin" /> : <Sparkles />}{loading ? "Analysing photo…" : "Suggest caption"}</Button>{image && <Button size="lg" variant="outline" onClick={() => { setImage(null); setCaption(""); setError(""); }}><RotateCcw />Reset</Button>}</div>
        {error && <p role="alert" className="mt-4 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      </div>

      <div className="archive-card p-6 md:p-8">
        <p className="eyebrow">AI suggestion</p>
        {!caption ? <p className="mt-6 text-muted-foreground">{loading ? "Looking at your photo…" : "Upload a photo and press “Suggest caption” to see the result here."}</p> : <div className="mt-5 space-y-5">
          <label className="block text-sm"><span className="font-semibold text-primary">Caption</span><textarea value={caption} onChange={(e) => setCaption(e.target.value)} rows={3} className="mt-1 w-full rounded-md border border-input bg-background p-3 text-base" /></label>
          <div><span className="text-sm font-semibold text-primary">Category</span><div className="mt-2 flex flex-wrap gap-2">{GALLERY_CATEGORIES.map((c) => <Button key={c} size="sm" variant={category === c ? "default" : "outline"} onClick={() => setCategory(c)}>{c}</Button>)}</div></div>
          {tags.length > 0 && <div className="flex flex-wrap gap-2">{tags.map((t) => <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs">#{t}</span>)}</div>}
          <div><span className="text-sm font-semibold text-primary">Archive entry</span><pre className="mt-2 overflow-x-auto rounded-md bg-muted p-3 text-xs">{entry}</pre><Button className="mt-3" variant="secondary" onClick={() => { navigator.clipboard.writeText(entry); toast.success("Copied — send it with the photo to add it to the gallery"); }}><Copy />Copy entry</Button></div>
          <p className="text-xs text-muted-foreground">AI suggestions can be wrong — always check the caption matches what you actually saw.</p>
        </div>}
      </div>
    </div></section></>;
}
