export function formatDate(date) {

    if (!date) return "Coming Soon";

    return new Date(date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric",
        }
    );

}