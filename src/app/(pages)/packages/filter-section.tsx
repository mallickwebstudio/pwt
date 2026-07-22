import React from 'react'
import Filter from './filter'

export default function FilterSection() {
    return (
        <>
            <section id='packages' className="relative bg-background">
                <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
                    <header className='max-w-2xl'>
                        <h2 className="h3">
                            Browse through our wide variety of packages custom for your needs
                        </h2>
                        {/* <p className="mt-4 text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p> */}
                    </header>

                    <Filter />
                </div>
            </section>
        </>
    )
}
