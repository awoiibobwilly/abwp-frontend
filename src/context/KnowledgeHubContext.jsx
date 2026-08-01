import { createContext, useContext, useState } from "react";

const KnowledgeHubContext = createContext();

export function KnowledgeHubProvider({ children }) {

    const [searchQuery, setSearchQuery] = useState("");

    const [activeSection, setActiveSection] = useState("research");

    return (

        <KnowledgeHubContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                activeSection,
                setActiveSection,
            }}
        >

            {children}

        </KnowledgeHubContext.Provider>

    );

}

export function useKnowledgeHub() {

    return useContext(KnowledgeHubContext);

}