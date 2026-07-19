import { PackageCategory } from '@/types';
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ data }: { data: PackageCategory }) {
    return (
        <Link
            className="relative p-2 overflow-hidden flex flex-col items-center justify-center text-center rounded-2xl group"
            href={`/packages?category=${encodeURIComponent(data.name)}`}
        >
            <div className="aspect-square w-40 rounded-full overflow-hidden">
                <Image
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-115"
                    src={data.image}
                    width={400}
                    height={300}
                    alt={data.name}
                />
            </div>

            <h3 className="h4 text-primary">{data.name}</h3>

            <p className="mt-1 text-sm">
                {data.count} Tour
                {data.count > 1 ? " Packages" : " Package"}
            </p>
        </Link>
    )
}
