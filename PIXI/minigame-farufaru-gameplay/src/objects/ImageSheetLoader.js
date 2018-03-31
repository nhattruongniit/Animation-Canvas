import createjs,{AbstractLoader,JSONLoader, ImageLoader,RequestUtils} from 'pixi.js';

AbstractLoader.IMAGESHEET = 'image-sheet';

function ImageSheetLoader(loadItem, prefer) {
    this.AbstractLoader_constructor(loadItem, prefer, AbstractLoader.IMAGESHEET),
    this.resultFormatter = this._formatResult,
    this._tagSrcAttribute = "src",
    RequestUtils.isImageTag(loadItem) ? this._tag = loadItem : RequestUtils.isImageTag(loadItem.src) ? this._tag = loadItem.src : RequestUtils.isImageTag(loadItem.tag) && (this._tag = loadItem.tag),
    null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"),
    this.on("initialize", this._updateXHR, this)

    const loader = this._jsonLoader = new JSONLoader(loadItem);
    loader.on('complete', this._jsonLoaded.bind(this));
};

let p = createjs.extend(ImageSheetLoader, ImageLoader);
let s = ImageSheetLoader;
const load = p.load;
Object.assign(s,{
    canLoadItem(item){
        return item.type === AbstractLoader.IMAGESHEET;
    },
    getItem(){
    }
});

Object.assign(p,{
    load(){ this._jsonLoader.load(); },
    _jsonLoaded(e){
        let src = this._jsonLoader._item.src.split('/');
        src[src.length - 1] = e.result.meta.image;
        this._item.src = src.join('/');
        load.call(this);
    },
    _getImageFrame(image, frame){
        console.log(frame);
    },
    _resultFormatSuccess(image){
        const frames = this._jsonLoader._result.frames;
        const
            sheet = {}, 
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            getData = function(rect){
                const {x,y,w,h} = rect;
                canvas.width = w;
                canvas.height = h;
                ctx.drawImage(image, x, y, image.width, image.height, 0, 0,image.width, image.height);
                const img = new Image();
                img.src = canvas.toDataURL();
                return img;
            }
            ;
        for(let x in frames){ sheet[x] = getData(frames[x].frame);}

        this._result = sheet;
        this._rawImage = image;
        this._sendComplete()
    }
});

const LoadQueue = createjs.LoadQueue;
createjs.LoadQueue = function(){
    let queue = new LoadQueue();
    queue._availableLoaders.push(ImageSheetLoader);
    return queue
}
createjs.ImageSheetLoader = ImageSheetLoader;
export default ImageSheetLoader;