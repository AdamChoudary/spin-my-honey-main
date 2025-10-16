import { utmLinks, generateUTMLink } from "@/utils/utmLinks";

// Component to display UTM links for parasite SEO campaigns
// This is for internal use - copy these links when creating content on other platforms

export const ParasiteSEOLinks = () => {
  return (
    <div className="space-y-6 p-6 bg-muted/30 rounded-lg">
      <div>
        <h3 className="text-lg font-bold mb-4">Parasite SEO Campaign Links</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Use these tracked links when creating content on external platforms
        </p>
      </div>

      <div className="grid gap-4">
        {/* Medium */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Medium.com</h4>
          <div className="space-y-1">
            <LinkItem
              label="Article Link"
              link={utmLinks.medium.article}
            />
            <LinkItem
              label="Author Bio"
              link={utmLinks.medium.profile}
            />
          </div>
        </div>

        {/* YouTube */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">YouTube</h4>
          <div className="space-y-1">
            <LinkItem
              label="Video Description"
              link={utmLinks.youtube.description}
            />
            <LinkItem
              label="Pinned Comment"
              link={utmLinks.youtube.pinned_comment}
            />
          </div>
        </div>

        {/* Reddit */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Reddit</h4>
          <div className="space-y-1">
            <LinkItem
              label="r/Teachers"
              link={utmLinks.reddit.teachers}
            />
            <LinkItem
              label="r/webdev"
              link={utmLinks.reddit.webdev}
            />
          </div>
        </div>

        {/* Quora */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Quora</h4>
          <div className="space-y-1">
            <LinkItem
              label="Answer Link"
              link={utmLinks.quora.answer}
            />
            <LinkItem
              label="Profile Link"
              link={utmLinks.quora.profile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkItem = ({ label, link }: { label: string; link: string }) => {
  const copyLink = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-muted-foreground min-w-[120px]">{label}:</span>
      <code className="flex-1 bg-background px-2 py-1 rounded text-[10px] overflow-x-auto">
        {link}
      </code>
      <button
        onClick={copyLink}
        className="px-2 py-1 bg-primary text-primary-foreground rounded text-[10px] hover:bg-primary/90"
      >
        Copy
      </button>
    </div>
  );
};

