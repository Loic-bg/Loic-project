import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Loic-Project" description="Description"/>

      <div className="space-y-4">
        <Typography>Loic Project</Typography>
        <Typography theme="primary" variant="body-lg" component="h1">
            Loic Project
        </Typography>
        <Typography theme="secondary" variant="lead" component="div">
            Loic Project
        </Typography>
        <Typography variant="body-sm" component="div">
            Loic Project
        </Typography>
        <Typography variant="caption4" component="div">
            Loic Project
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
            Loic Project
        </Typography>
      </div>
    </>
  );
}
