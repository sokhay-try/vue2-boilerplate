/**
 * ROLE_SYSTEM_ADMINISTRATOR
 */
const ROLE_SYSTEM_ADMINISTRATOR = {
  noChildMenu: [],
  haveChildMenu: [
    {
      title: "Users",
      icon: "mdi-account-circle",
      childs: [
        {
          title: "Management",
          icon: "mdi-account-multiple-outline",
          route: { name: "home" },
        },
        {
          title: "Management2",
          icon: "mdi-account-multiple-outline",
          route: { name: "about" },
        },
      ],
    },
  ],
};

/**
 * ROLE_HR_ADMINISTRATOR
 */
const ROLE_HR_ADMINISTRATOR = {
  noChildMenu: [
    {
      title: "Home",
      icon: "mdi-account-multiple-outline",
      route: { name: "home" },
    },
    {
      title: "About",
      icon: "mdi-account-multiple-outline",
      route: { name: "about" },
    },
  ],
  haveChildMenu: [],
};

export { ROLE_SYSTEM_ADMINISTRATOR, ROLE_HR_ADMINISTRATOR };

// const ROLE_SYSTEM_ADMINISTRATOR = {
//     noChildMenu: [
//       {
//         title: "Home",
//         icon: "mdi-account-multiple-outline",
//         route: { name: "home" },
//       },
//     ],
//     haveChildMenu: [
//       {
//         title: "Users",
//         icon: "mdi-account-circle",
//         childs: [
//           {
//             title: "Management",
//             icon: "mdi-account-multiple-outline",
//           },
//           {
//             title: "Management2",
//             icon: "mdi-account-multiple-outline",
//           },
//         ],
//       },
//     ],
//   };
