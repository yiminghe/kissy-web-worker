self.onmessage = function (e) {
    importScripts('http://g.tbcdn.cn/kissy/k/1.4.1/seed.js');
    KISSY.config('base', 'http://g.tbcdn.cn/kissy/k/1.4.1/');
    KISSY.config('combine',true);
    KISSY.config('loadModsFn', function (rs, config) {
        importScripts(rs.fullpath||rs.path);
        config.success();
    });
    KISSY.use('color',function(S,Color){
        self.onmessage=function(e){
           self.postMessage({
              color: Color.parse(e.data.color).toRGB()
           });
        };
        self.postMessage({
            complete:1
        });
    });
};