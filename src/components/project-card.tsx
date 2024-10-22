import Image from 'next/image';
import Link from 'next/link';
// import Markdown from "react-markdown";

import { cn } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  previewUrl?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export const ProjectCard = ({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  previewUrl,
  links,
  className
}: Props) => (
  <Card className="flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg">
    <Link href={href || '#'} className={cn('block cursor-pointer', className)}>
      {previewUrl && (
        <Image
          src={previewUrl}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      )}

      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      )}
    </Link>
    <CardHeader className="px-2">
      <div className="space-y-1">
        <CardTitle className="mt-1 text-base">{title}</CardTitle>
        <time className="font-sans text-xs">{dates}</time>
        <div className="hidden font-sans text-xs underline print:visible">
          {link?.replace('https://', '').replace('www.', '').replace('/', '')}
        </div>
        <p className="text-muted-foreground prose prose-invert max-w-full text-pretty font-sans text-xs">
          {description}
        </p>
      </div>
    </CardHeader>
    <CardContent className="mt-auto px-2 vertical">
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {tags?.map(tag => (
            <Badge className="px-1 py-0 text-[10px]" variant="fill" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </CardContent>
    <CardFooter className="px-2 pb-2">
      {links && links.length > 0 && (
        <div className="flex-wrap items-start gap-1 horizontal">
          {links?.map((link, idx) => (
            <Link href={link?.href} key={idx} target="_blank">
              <Badge key={idx} className="gap-2 px-2 py-1 text-[10px] horizontal">
                {link.icon}
                {link.type}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </CardFooter>
  </Card>
);
