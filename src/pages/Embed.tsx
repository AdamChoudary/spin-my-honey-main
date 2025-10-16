import { SpinWheel } from "@/components/SpinWheel";
import { PoweredByBadge } from "@/components/PoweredByBadge";
import { useEffect } from "react";

const Embed = () => {
  useEffect(() => {
    // Track embed page views
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "embed_view", {
        event_category: "parasite_seo",
        event_label: "widget_impression",
        value: 1,
      });
    }

    // Track parent domain for backlink source tracking
    if (window.parent !== window) {
      try {
        const parentUrl = document.referrer;
        if (parentUrl && (window as any).gtag) {
          (window as any).gtag("event", "embed_parent_domain", {
            event_category: "parasite_seo",
            event_label: new URL(parentUrl).hostname,
            referrer: parentUrl,
          });
        }
      } catch (e) {
        // Cross-origin restriction
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col items-center justify-center">
      {/* Compact version for embedding */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_350px] gap-4 items-start">
          <div className="flex flex-col items-center justify-center">
            <SpinWheel />
          </div>
        </div>

        {/* Attribution Badge */}
        <div className="mt-4 text-center">
          <PoweredByBadge variant="gradient" />
        </div>
      </div>
    </div>
  );
};

export default Embed;

