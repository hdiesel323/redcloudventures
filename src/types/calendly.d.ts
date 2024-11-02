interface Calendly {
    initPopupWidget: (config: { url: string }) => void;
}

interface Window {
    Calendly?: Calendly;
} 