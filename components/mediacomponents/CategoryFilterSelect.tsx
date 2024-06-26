import { getCategories } from '@/fetchData'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Category from '@/types/categoryType'

const CategoryFilterSelect = async () => {
  const allCategories = await getCategories("categories.php")


  return (
    <div className='lg:hidden my-5'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          
          <button
            className='border dark:border-gray-500 border-black w-full py-2 px-4 rounded-2xl flex items-center'
          >
            <span>Categories</span> 
            <span><ChevronDownIcon className='w-5 ml-2'/></span>
          </button>

        
        </DropdownMenuTrigger>

    
        <DropdownMenuContent className='overflow-auto h-[350px]'>
          {allCategories.categories.map((category: Category) => (
            <DropdownMenuItem key={category.idCategory}>
              <Link href={`/${category.strCategory}`}>
                {category.strCategory} 
              </Link>
            </DropdownMenuItem>
            ))} 
        </DropdownMenuContent>
      </DropdownMenu>  
    </div>
  )
}

export default CategoryFilterSelect