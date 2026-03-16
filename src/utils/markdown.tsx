
export const parseMarkdown = (text: string) => {
    return text.split('\n').map((line, i) => {
        // Basic bold parsing: **text**
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
            <span key={i} className="block mb-1">
                {parts.map((part, index) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
                    }
                    return <span key={index}>{part}</span>;
                })}
            </span>
        );
    });
};
