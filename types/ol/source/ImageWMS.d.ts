import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { LoadFunction } from 'ol/Image';
import { ObjectEvent } from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
import ImageSource, { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
import WMSServerType from 'ol/source/WMSServerType';
export default class ImageWMS extends ImageSource {
    constructor(opt_options?: Options);
    getGetFeatureInfoUrl(coordinate: Coordinate, resolution: number, projection: ProjectionLike, params: { [key: string]: any }): string;
    getImageLoadFunction(): LoadFunction;
    getParams(): { [key: string]: any };
    getUrl(): string;
    setImageLoadFunction(imageLoadFunction: LoadFunction): void;
    setUrl(url: string): void;
    updateParams(params: { [key: string]: any }): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export interface Options {
    attributions?: AttributionLike;
    crossOrigin?: string;
    hidpi?: boolean;
    serverType?: WMSServerType | string;
    imageLoadFunction?: LoadFunction;
    params: { [key: string]: any };
    projection?: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    url: string;
}
