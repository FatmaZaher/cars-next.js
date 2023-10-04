'use client'

import { searchManufacturerProps, } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constans';
import Image from 'next/image';
import { Fragment, useState } from 'react';


function SearchManufacturer({ manufacturer, setManufacturer }: searchManufacturerProps) {
  const [query, setQuery] = useState("");
  const filterManufacturers = query == '' ? manufacturers : manufacturers.filter((item) => (
    item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
  ))
  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-[14px]'>
            <Image src='car-logo.svg'
              height={20}
              width={20}
              className='ml-4'
              alt='car logo' />
          </Combobox.Button>

          <Combobox.Input className='search-manufacturer__input'
            placeholder='volk'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)} />

          <Transition as={Fragment}
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filterManufacturers.length === 0 && query !== '' ?
                (<Combobox.Option value={query} className={'search-manufacturer__option'}>
                  Nothing found
                </Combobox.Option>) :
                (filterManufacturers.map((Manufacturer) => (
                  <Combobox.Option key={Manufacturer} value={Manufacturer} className={({ active }) => `
              relative search-manufacturer__option
              ${active ? 'bg-primary-blue twxt-white' : 'text-gray-900'}
                  `}>

                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {Manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                              }`}
                          >
                            hh
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                )
                ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox >
    </div >
  )
}

export default SearchManufacturer