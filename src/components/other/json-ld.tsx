import { siteConfig } from "@/lib/metadata";

type BreadcrumbItem = {
    name: string;
    href: string;
};

type JsonLdProps = {
    data: Record<string, unknown>;
    breadcrumb?: BreadcrumbItem[];
};

function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
    return {
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteConfig.baseUrl}${item.href}`,
        })),
    };
}

export function JsonLd({
    data,
    breadcrumb,
}: JsonLdProps) {
    const graph = [data];

    if (breadcrumb?.length) {
        graph.push(createBreadcrumbJsonLd(breadcrumb));
    }

    const schema = {
        "@context": "https://schema.org",
        "@graph": graph,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}