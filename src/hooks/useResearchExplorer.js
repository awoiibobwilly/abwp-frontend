// import { useMemo, useState } from "react";

// function useResearchExplorer(contributions = []) {

//     /*
//     ==========================================
//     FILTER STATE
//     ==========================================
//     */

//     const [activeFilter, setActiveFilter] = useState("All");

//     const [searchQuery, setSearchQuery] = useState("");

//     const [sortBy, setSortBy] = useState("latest");

//     /*
//     ==========================================
//     SELECTED RESEARCH
//     ==========================================
//     */

//     const [

//         selectedResearch,

//         setSelectedResearch,

//     ] = useState(null);

//     /*
//     ==========================================
//     ACTIONS
//     ==========================================
//     */

//     const openResearch = (research) => {

//         setSelectedResearch(research);

//     };

//     const closeResearch = () => {

//         setSelectedResearch(null);

//     };

//     /*
//     ==========================================
//     FEATURED RESEARCH
//     ==========================================
//     */

//     const featuredResearch = useMemo(() => {

//         return contributions[0] ?? null;

//     }, [contributions]);

//     /*
//     ==========================================
//     CONTRIBUTION TYPES
//     ==========================================
//     */

//     const contributionTypes = useMemo(() => {

//         const unique = new Map();

//         contributions.forEach((contribution) => {

//             unique.set(

//                 contribution.contribution_type,

//                 {

//                     value: contribution.contribution_type,

//                     label: contribution.contribution_type_display,

//                 }

//             );

//         });

//         return [

//             {

//                 value: "All",

//                 label: "All",

//             },

//             ...unique.values(),

//         ];

//     }, [contributions]);

//     /*
//     ==========================================
//     FILTER / SEARCH / SORT
//     ==========================================
//     */

//     const filteredResearch = useMemo(() => {

//         let results = [...contributions];

//         /*
//         FILTER
//         */

//         if (activeFilter !== "All") {

//             results = results.filter(

//                 contribution =>

//                     contribution.contribution_type === activeFilter

//             );

//         }

//         /*
//         SEARCH
//         */

//         if (searchQuery.trim()) {

//             const query = searchQuery.toLowerCase();

//             results = results.filter(contribution =>

//                 contribution.title.toLowerCase().includes(query)

//                 ||

//                 contribution.summary?.toLowerCase().includes(query)

//                 ||

//                 contribution.abstract?.toLowerCase().includes(query)

//                 ||

//                 contribution.publication?.toLowerCase().includes(query)

//                 ||

//                 contribution.doi?.toLowerCase().includes(query)

//             );

//         }

//         /*
//         SORT
//         */

//         switch (sortBy) {

//             case "oldest":

//                 results.sort(

//                     (a, b) =>

//                         new Date(a.publication_date || 0)

//                         -

//                         new Date(b.publication_date || 0)

//                 );

//                 break;

//             case "title":

//                 results.sort(

//                     (a, b) =>

//                         a.title.localeCompare(b.title)

//                 );

//                 break;

//             case "latest":

//             default:

//                 results.sort(

//                     (a, b) =>

//                         new Date(b.publication_date || 0)

//                         -

//                         new Date(a.publication_date || 0)

//                 );

//         }

//         return results;

//     }, [

//         contributions,

//         activeFilter,

//         searchQuery,

//         sortBy,

//     ]);

//     /*
//     ==========================================
//     EXPORT
//     ==========================================
//     */

//     return {

//         featuredResearch,

//         contributionTypes,

//         filteredResearch,

//         activeFilter,

//         searchQuery,

//         sortBy,

//         selectedResearch,

//         actions: {

//             setActiveFilter,

//             setSearchQuery,

//             setSortBy,

//             openResearch,

//             closeResearch,

//         },

//     };

// }

// export default useResearchExplorer;




import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function useResearchExplorer(contributions = []) {

    /*
    ==========================================
    NAVIGATION
    ==========================================
    */

    const navigate = useNavigate();

    /*
    ==========================================
    FILTER STATE
    ==========================================
    */

    const [activeFilter, setActiveFilter] = useState("All");

    const [searchQuery, setSearchQuery] = useState("");

    const [sortBy, setSortBy] = useState("latest");

    /*
    ==========================================
    ACTIONS
    ==========================================
    */

    const openResearch = (research) => {

        if (!research?.slug) return;

        navigate(`/research-contributions/${research.slug}`);

    };

    /*
    ==========================================
    FEATURED RESEARCH
    ==========================================
    */

    const featuredResearch = useMemo(() => {

        return contributions[0] ?? null;

    }, [contributions]);

    /*
    ==========================================
    CONTRIBUTION TYPES
    ==========================================
    */

    const contributionTypes = useMemo(() => {

        const unique = new Map();

        contributions.forEach((contribution) => {

            unique.set(

                contribution.contribution_type,

                {

                    value: contribution.contribution_type,

                    label: contribution.contribution_type_display,

                }

            );

        });

        return [

            {

                value: "All",

                label: "All",

            },

            ...unique.values(),

        ];

    }, [contributions]);

    /*
    ==========================================
    FILTER / SEARCH / SORT
    ==========================================
    */

    const filteredResearch = useMemo(() => {

        let results = [...contributions];

        /*
        FILTER
        */

        if (activeFilter !== "All") {

            results = results.filter(

                contribution =>

                    contribution.contribution_type === activeFilter

            );

        }

        /*
        SEARCH
        */

        if (searchQuery.trim()) {

            const query = searchQuery.toLowerCase();

            results = results.filter(contribution =>

                contribution.title.toLowerCase().includes(query)

                ||

                contribution.summary?.toLowerCase().includes(query)

                ||

                contribution.abstract?.toLowerCase().includes(query)

                ||

                contribution.publication?.toLowerCase().includes(query)

                ||

                contribution.doi?.toLowerCase().includes(query)

            );

        }

        /*
        SORT
        */

        switch (sortBy) {

            case "oldest":

                results.sort(

                    (a, b) =>

                        new Date(a.publication_date || 0)

                        -

                        new Date(b.publication_date || 0)

                );

                break;

            case "title":

                results.sort(

                    (a, b) =>

                        a.title.localeCompare(b.title)

                );

                break;

            case "latest":

            default:

                results.sort(

                    (a, b) =>

                        new Date(b.publication_date || 0)

                        -

                        new Date(a.publication_date || 0)

                );

        }

        return results;

    }, [

        contributions,

        activeFilter,

        searchQuery,

        sortBy,

    ]);

    /*
    ==========================================
    EXPORT
    ==========================================
    */

    return {

        featuredResearch,

        contributionTypes,

        filteredResearch,

        activeFilter,

        searchQuery,

        sortBy,

        actions: {

            setActiveFilter,

            setSearchQuery,

            setSortBy,

            openResearch,

        },

    };

}

export default useResearchExplorer;