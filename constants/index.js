export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/search",
      label: "Search",
    },
    {
      imgURL: "/assets/activity.svg",
      route: "/activity",
      label: "Activity",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/create-post",
      label: "Create Post",
    },
    {
      imgURL: "/assets/community.svg",
      route: "/communities",
      label: "Communities",
    },
    {
      imgURL: "/assets/messages.svg",
      route: "/messages",
      label: "Messages",
    },
    {
        imgURL: "/assets/opportunities.svg",
        route: "/opportunities",
        label: "Opportunities",
    },
    {
      imgURL: "/assets/user.svg",
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "posts", label: "Posts", icon: "/assets/reply.svg" },
    { value: "test1", label: "Test1", icon: "/assets/skills.svg" },
    { value: "test2", label: "Test2", icon: "/assets/skills.svg" },
  ];
  
  export const communityTabs = [
    { value: "posts", label: "Posts", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    { value: "test3", label: "Test3", icon: "/assets/skills.svg" },
  ];

  export const OpportunitiesDefaultValues = {
    title: '',
    description: '',
    location: '',
    deadline: new Date(),
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    compensation: '',
    isFree: false,
    url: '',
  }