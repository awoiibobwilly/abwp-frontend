const sidebarRegistry = [

    {

        id: "publication",

        title: "Publication Information",

        section: "metadata",

        order: 10,

    },

    {

        id: "actions",

        title: "Research Actions",

        section: "actions",

        order: 20,

    },

].sort((a, b) => a.order - b.order);

export default sidebarRegistry;