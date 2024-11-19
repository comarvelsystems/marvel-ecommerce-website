import en from "./messages/en.json";

type Messages = typeof en;

declare global {
    interface IntlMessages extends Messages {}
}

declare global {
    interface Window {
        store: UseBoundStore<StoreApi<Store>>;
    }
}
