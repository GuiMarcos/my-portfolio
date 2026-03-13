export interface CodeToken {
    text: string;
    cssClass?: string;
}

export interface CodeLine {
    number: string;
    indent?: boolean;
    gapBefore?: boolean;
    parts: CodeToken[];
}

export interface CodeSnippet {
    fileName: string;
    lines: CodeLine[];
}
