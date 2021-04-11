import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'


 const appMenuItems = [
    {
      name: 'Home',
      link: '/',
      Icon: IconDashboard,
    },
    {
      name: 'Products',
      link: '/products',
      Icon: IconDashboard,
    },
    {
      name: 'Offers',
      link: '/offers',
      Icon: IconShoppingCart,
    },
    {
      name: 'Categories',
      Icon: IconLibraryBooks,
      items: [
        {
          name: 'Home Furniture',
          items: [
            {
              name: 'Living',
              link: '/living',
            },
            {
              name: 'Bedroom',
            },
            {
              name: 'Dining',
            },
          ],
        },
        {
          name: 'Office Furniture',
          items: [
            {
              name: 'Office Tables',
              link: 'OfficeChairs',
            },
            {
              name: 'Cupboards & racks',
            },
            {
              name: 'Computer Tables & Study Desks',
            },
            {
              name: 'Work Stations',
            },
          ],
        },
      ],
    },
    {
      name: 'New at Ragfurnhi',
      link: '/newitems',
      Icon: IconBarChart,
    },
    {
      name: 'Contact Us',
      link: '/contact',
      Icon: IconPeople,
    },
    {
      name: 'About Us',
      link: '/about',
      Icon: IconPeople,
    },

  ]

  export default appMenuItems







  // const appMenuItems = [
  //   {
  //     name: 'Home',
  //     link: '/',
  //     Icon: IconDashboard,
  //   },
  //   {
  //     name: 'Products',
  //     link: '/Products',
  //     Icon: IconDashboard,
  //   },
  //   {
  //     name: 'Orders',
  //     link: '/orders',
  //     Icon: IconShoppingCart,
  //   },
  //   {
  //     name: 'Customers',
  //     link: '/customers',
  //     Icon: IconPeople,
  //   },
  //   {
  //     name: 'Reports',
  //     link: '/reports',
  //     Icon: IconBarChart,
  //   },
  //   {
  //     name: 'Nested Pages',
  //     Icon: IconLibraryBooks,
  //     items: [
  //       {
  //         name: 'Level 2',
  //       },
  //       {
  //         name: 'Level 2',
  //         items: [
  //           {
  //             name: 'Level 3',
  //           },
  //           {
  //             name: 'Level 3',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]