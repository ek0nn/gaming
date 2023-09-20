'use client'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import React from 'react'
import Darkmodetoggle from './darkmodetoggle'

const Navbar = () => {
  return (

    <>
  <div className="flex items-center justify-between  mt-2 h-20">

{/* Gaming on the left */}
<div>
  <p className='ml-4'>Gaming</p>
</div>

{/* Items 1, 2, and 3 on the right */}
<div className="flex space-x-4">
  <NavigationMenu >
    <NavigationMenuList>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
        <NavigationMenuContent>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger>Games</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink className="flex w-full lg:w-[400px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
            <ul>
                <li>PC</li>
                <li>PS5</li>
                <li>PS4</li>
                <li>Xbox One</li>
                <li>Xbox 360</li>
                <li>Nintendo Switch</li>
                <li>View All Games ---{'>'}</li>

            </ul>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Reviews</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink className="flex w-full lg:w-[400px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
          <ul>
            <li>Top-Rated Games</li>
            <li>Latest Reviews</li>
            <li>Upcoming Releases</li>

        </ul>
          </NavigationMenuLink>
        
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink className="flex w-full lg:w-[400px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
           Here you will find collection of games that have been recommended by the community.
          </NavigationMenuLink>
        
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Showcase</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink className="flex w-full lg:w-[400px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
          <ul>
            <li>Trending Clips</li>
            <li>Most Liked Clips</li>
            </ul>
          </NavigationMenuLink>
        
        </NavigationMenuContent>
      </NavigationMenuItem>
    
      <NavigationMenuItem>
        <NavigationMenuTrigger>My Account</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink className="flex w-full lg:w-[400px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
          <ul>
            <li>Sign Up</li>
            <li>Log in</li>
            </ul>
          </NavigationMenuLink>
        
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem className=''>
       

          <Darkmodetoggle  />
          
        <NavigationMenuContent>
        </NavigationMenuContent>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</div>


</div>



   </>
  )
}

export default Navbar