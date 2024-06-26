import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var howToRVisualHtml7482D2A16E394E0D92614E8F90B57D65: IVisualPlugin = {
    name: 'howToRVisualHtml7482D2A16E394E0D92614E8F90B57D65',
    displayName: 'HowToRVisualHtml',
    class: 'Visual',
    apiVersion: '5.1.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = (<any>globalThis).dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["howToRVisualHtml7482D2A16E394E0D92614E8F90B57D65"] = howToRVisualHtml7482D2A16E394E0D92614E8F90B57D65;
}
export default howToRVisualHtml7482D2A16E394E0D92614E8F90B57D65;