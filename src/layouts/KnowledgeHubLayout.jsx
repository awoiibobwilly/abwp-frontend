import { KnowledgeHubProvider } from "../context/KnowledgeHubContext";
import KnowledgeHubShell from "../components/knowledgeHub/KnowledgeHubShell";
function KnowledgeHubLayout() {

    return (

        <KnowledgeHubProvider>

            <KnowledgeHubShell />

        </KnowledgeHubProvider>

    );

}

export default KnowledgeHubLayout;