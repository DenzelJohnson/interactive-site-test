          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"04941abd-210f-4aa4-9b1c-ee4cdbbdd262":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"7786"},"ticker":null,"visible":false},"id":"7789","type":"Grid"},{"attributes":{},"id":"7804","type":"BasicTickFormatter"},{"attributes":{},"id":"7810","type":"UnionRenderers"},{"attributes":{"axis":{"id":"7790"},"dimension":1,"ticker":null,"visible":false},"id":"7793","type":"Grid"},{"attributes":{},"id":"7805","type":"AllLabels"},{"attributes":{},"id":"7791","type":"BasicTicker"},{"attributes":{"end":6},"id":"7780","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"2qz6XG1he0DTTWIQmJB7QB2N6EP8qHtAm7IuyZzTe0Bl1pzNFP17QEXY8PRK2HtAyiNuBBjbe0Cf/8MC5Lx7QArXo3B97ntAlRAHZMoHfEBTyhBswTR8QAksJXCQYHxAtMh2vp85fECl7hS8sjx8QHF6cqhaGHxAQmDl0GJMfEAYmYBfA4B8QP25DQ/mlXxAu6mSEgzEfEAkufyH9Jp8QIzhoHNNnnxANs07TtFzfEB56SYxSKp8QMcHhyhw4HxAtdHvsQr3fEBzqJX4Esx8QJOpglFJ/HxAdNQsK+j/fED6HwX0R898QLByaJEtCH1AG+ssxDQkfUBfwexUL1h9QCo3UUsTK31AApoIG55dfUBcx7jigmF9QM2as5m+Kn1A5/up8RJmfUChljDkAoN9QBfZzvdTuX1A1J0nnhOKfUByio7k8r59QDeSX5odw31Ake18PzWGfUAfhetR+MN9QCdCNATR4X1AzvCwmngafkCLLOPwE+l9QOF6FK5HIH5AH4XrUbgkfkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"7809"},"selection_policy":{"id":"7810"}},"id":"7773","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7773"}},"id":"7801","type":"CDSView"},{"attributes":{},"id":"7787","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"7774"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7799","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"7794","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"7794"}]},"id":"7795","type":"Toolbar"},{"attributes":{},"id":"7807","type":"BasicTickFormatter"},{"attributes":{"text":"Chicago \\u2192 Cleveland"},"id":"7776","type":"Title"},{"attributes":{"data_source":{"id":"7773"},"glyph":{"id":"7798"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7799"},"view":{"id":"7801"}},"id":"7800","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"7774"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7798","type":"Rect"},{"attributes":{},"id":"7782","type":"LinearScale"},{"attributes":{},"id":"7784","type":"LinearScale"},{"attributes":{},"id":"7808","type":"AllLabels"},{"attributes":{"below":[{"id":"7786"}],"center":[{"id":"7789"},{"id":"7793"}],"height":400,"left":[{"id":"7790"}],"renderers":[{"id":"7800"}],"title":{"id":"7776"},"toolbar":{"id":"7795"},"toolbar_location":null,"width":400,"x_range":{"id":"7778"},"x_scale":{"id":"7782"},"y_range":{"id":"7780"},"y_scale":{"id":"7784"}},"id":"7775","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"7778","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"7774","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"7804"},"major_label_policy":{"id":"7805"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7787"}},"id":"7786","type":"LinearAxis"},{"attributes":{},"id":"7809","type":"Selection"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"7807"},"major_label_policy":{"id":"7808"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7791"}},"id":"7790","type":"LinearAxis"}],"root_ids":["7775"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"04941abd-210f-4aa4-9b1c-ee4cdbbdd262","root_ids":["7775"],"roots":{"7775":"91c7d024-e687-4025-9260-e7ac301c84a0"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"4a61d99f-ca98-4161-a36d-fecdc5270418":{"defs":[],"roots":{"references":[{"attributes":{"data":{"val":{"__ndarray__":"S6shcY9hdkBEkg8wKVh2QLnJA+z+SXZASCLq9HJUdkBg2bv1MGN2QNzKXCqgjHZA9AR4wRbDdkBfKcsQx692QI/C9SjcpXZAsa1VcXmWdkBgNTv346B2QHsUrkcBtnZAwIbx5GThdkAfhetReBd3QJmesMQD9HZA2vLbIY/zdkCXAz3UNu52QGsgp/lU7XZAoBov3eQDd0AoAuZrgDl3QEkFX+LZa3dAgez17o9Bd0AY+9waQkF3QAwyE1YUR3dAdQsT/MU5d0DogTQI2FJ3QPyHmSLlindAZl3tcjvAd0BO7ncoCo93QGMrwxP1jndAhADPrNuUd0COHmT+NoZ3QMutWuOdoHdA3TUy2Uncd0CQ3WADnRR4QKVrJt9s6HdAoTPEDKjcd0AJ928Do+J3QJgJ0ACo0ndAr9mAvmPud0C/48qPri14QK0175P+aHhAio7k8h8qeEDsY6oFWyp4QIHFK1pqMHhAo/Q7AxkfeECTBaeZKTx4QJJpfkYTf3hA2LViJGC9eEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"7847"},"selection_policy":{"id":"7848"}},"id":"7811","type":"ColumnDataSource"},{"attributes":{},"id":"7846","type":"AllLabels"},{"attributes":{"end":6},"id":"7818","type":"Range1d"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"7845"},"major_label_policy":{"id":"7846"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7829"}},"id":"7828","type":"LinearAxis"},{"attributes":{},"id":"7842","type":"BasicTickFormatter"},{"attributes":{},"id":"7822","type":"LinearScale"},{"attributes":{"axis":{"id":"7828"},"dimension":1,"ticker":null,"visible":false},"id":"7831","type":"Grid"},{"attributes":{},"id":"7825","type":"BasicTicker"},{"attributes":{},"id":"7829","type":"BasicTicker"},{"attributes":{"end":6},"id":"7816","type":"Range1d"},{"attributes":{},"id":"7843","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"7812"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7837","type":"Rect"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"7842"},"major_label_policy":{"id":"7843"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7825"}},"id":"7824","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"7812","type":"LinearColorMapper"},{"attributes":{},"id":"7847","type":"Selection"},{"attributes":{"axis":{"id":"7824"},"ticker":null,"visible":false},"id":"7827","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"7832","type":"HoverTool"},{"attributes":{"source":{"id":"7811"}},"id":"7839","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"7832"}]},"id":"7833","type":"Toolbar"},{"attributes":{"below":[{"id":"7824"}],"center":[{"id":"7827"},{"id":"7831"}],"height":400,"left":[{"id":"7828"}],"renderers":[{"id":"7838"}],"title":{"id":"7814"},"toolbar":{"id":"7833"},"toolbar_location":null,"width":400,"x_range":{"id":"7816"},"x_scale":{"id":"7820"},"y_range":{"id":"7818"},"y_scale":{"id":"7822"}},"id":"7813","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7848","type":"UnionRenderers"},{"attributes":{"text":"Chicago \\u2192 Detroit"},"id":"7814","type":"Title"},{"attributes":{},"id":"7820","type":"LinearScale"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"7812"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7836","type":"Rect"},{"attributes":{},"id":"7845","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7811"},"glyph":{"id":"7836"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7837"},"view":{"id":"7839"}},"id":"7838","type":"GlyphRenderer"}],"root_ids":["7813"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"4a61d99f-ca98-4161-a36d-fecdc5270418","root_ids":["7813"],"roots":{"7813":"67a95e09-a3aa-4173-955c-74196bc2786b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"25ae217d-f437-4dbb-ab3d-d37390971cfc":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"7870"}]},"id":"7871","type":"Toolbar"},{"attributes":{},"id":"7863","type":"BasicTicker"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"7870","type":"HoverTool"},{"attributes":{},"id":"7860","type":"LinearScale"},{"attributes":{},"id":"7880","type":"BasicTickFormatter"},{"attributes":{},"id":"7858","type":"LinearScale"},{"attributes":{"text":"Chicago \\u2192 Duluth"},"id":"7852","type":"Title"},{"attributes":{"end":6},"id":"7854","type":"Range1d"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"7883"},"major_label_policy":{"id":"7884"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7867"}},"id":"7866","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"7850"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7875","type":"Rect"},{"attributes":{},"id":"7881","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"7850","type":"LinearColorMapper"},{"attributes":{},"id":"7885","type":"Selection"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"7850"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7874","type":"Rect"},{"attributes":{"axis":{"id":"7866"},"dimension":1,"ticker":null,"visible":false},"id":"7869","type":"Grid"},{"attributes":{"source":{"id":"7849"}},"id":"7877","type":"CDSView"},{"attributes":{"below":[{"id":"7862"}],"center":[{"id":"7865"},{"id":"7869"}],"height":400,"left":[{"id":"7866"}],"renderers":[{"id":"7876"}],"title":{"id":"7852"},"toolbar":{"id":"7871"},"toolbar_location":null,"width":400,"x_range":{"id":"7854"},"x_scale":{"id":"7858"},"y_range":{"id":"7856"},"y_scale":{"id":"7860"}},"id":"7851","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7886","type":"UnionRenderers"},{"attributes":{},"id":"7883","type":"BasicTickFormatter"},{"attributes":{"end":6},"id":"7856","type":"Range1d"},{"attributes":{"data_source":{"id":"7849"},"glyph":{"id":"7874"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7875"},"view":{"id":"7877"}},"id":"7876","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"7880"},"major_label_policy":{"id":"7881"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7863"}},"id":"7862","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"fh04Z0QkgkALqIEwQSCCQDTsnAv4H4JATC5rB5gYgkBZ4IZzOCeCQIwxC0hGO4JA4847BCRXgkDigiLMc2SCQGrfNxngV4JA3LLoQoFXgkDAIVSpqU+CQPGvLyPmXoJAfVepRelzgkDA9+3axJCCQHDOiNLenIJAyRbuAX+PgkCEeTR6Co+CQIMjN3mghoJAiH/Y0pOWgkBm6VRDjKyCQJwgoLFlyoJA/xnv2EnVgkApTqTqHceCQCxAgLGTxoJAfaKhNZW9gkC044bfPc6CQPLAtjQt5YJAeUlSiAYEg0CG0WLftA2DQA0QFl9uCINA1AbM6Bz+gkDylqsfi/SCQJNOyd7nBYNADwpK0bodg0BcBvdepz2DQA3gLZDAUINAFA4Yf5ZAg0DzEq0muUCDQGiLtQmBK4NAayUZ3pE9g0CXCK+4Q1aDQDkvqTVId4NAUrgeheuUg0AbDBqfvniDQENkR5nDeINAC6R6IXNog0BKkFvdO3WDQM6XzdK0joNAFVhbDOmwg0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"7885"},"selection_policy":{"id":"7886"}},"id":"7849","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"7862"},"ticker":null,"visible":false},"id":"7865","type":"Grid"},{"attributes":{},"id":"7884","type":"AllLabels"},{"attributes":{},"id":"7867","type":"BasicTicker"}],"root_ids":["7851"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"25ae217d-f437-4dbb-ab3d-d37390971cfc","root_ids":["7851"],"roots":{"7851":"1cd72785-6879-4178-8d2f-9746032c3ece"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"d538d7fb-6bfc-4dc3-90ad-67279e791986":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"7921"},"major_label_policy":{"id":"7922"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7905"}},"id":"7904","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"rBxaZDtvgkCsHFpkO2+CQI9VpYjHTYJAj1WliMdNgkArhxbZbnWCQCuHFtludYJAppJLLUV3gkCuR+F6FKqCQK5H4XoUqoJAPHL/7IKHgkA8cv/sgoeCQLgehesBsYJAuB6F6wGxgkBbfdAO07OCQLByaJHt5IJAsHJoke3kgkDojllRPsGCQOiOWVE+wYJARrbz/ZTsgkBGtvP9lOyCQBj8R/Bg8IJAsp3vp8Yfg0Cyne+nxh+DQJSrs7X5+oJAlKuztfn6gkDTTWIQKCiDQNNNYhAoKINAzubM0e4sg0C0yHa+n1qDQLTIdr6fWoNAQMgNGrU0g0BAyA0atTSDQGDl0CK7Y4NAYOXQIrtjg0CE0VGzfGmDQLbz/dR4lYNAtvP91HiVg0Ds5Gd+cG6DQOzkZ35wboNA7nw/NU6fg0DufD81Tp+DQDq81pQKpoNA+oZ42kDRg0D6hnjaQNGDQJgBwuIrqINAmAHC4iuog0B7FK5H4dqDQHsUrkfh2oNA9jpOdpjig0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"7923"},"selection_policy":{"id":"7924"}},"id":"7887","type":"ColumnDataSource"},{"attributes":{},"id":"7918","type":"BasicTickFormatter"},{"attributes":{"text":"Chicago \\u2192 Hamilton"},"id":"7890","type":"Title"},{"attributes":{},"id":"7896","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"7888"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7913","type":"Rect"},{"attributes":{"end":6},"id":"7894","type":"Range1d"},{"attributes":{},"id":"7919","type":"AllLabels"},{"attributes":{},"id":"7923","type":"Selection"},{"attributes":{},"id":"7898","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"7908"}]},"id":"7909","type":"Toolbar"},{"attributes":{},"id":"7901","type":"BasicTicker"},{"attributes":{"axis":{"id":"7904"},"dimension":1,"ticker":null,"visible":false},"id":"7907","type":"Grid"},{"attributes":{"source":{"id":"7887"}},"id":"7915","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"7888"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7912","type":"Rect"},{"attributes":{},"id":"7924","type":"UnionRenderers"},{"attributes":{"below":[{"id":"7900"}],"center":[{"id":"7903"},{"id":"7907"}],"height":400,"left":[{"id":"7904"}],"renderers":[{"id":"7914"}],"title":{"id":"7890"},"toolbar":{"id":"7909"},"toolbar_location":null,"width":400,"x_range":{"id":"7892"},"x_scale":{"id":"7896"},"y_range":{"id":"7894"},"y_scale":{"id":"7898"}},"id":"7889","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"7892","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"7888","type":"LinearColorMapper"},{"attributes":{},"id":"7905","type":"BasicTicker"},{"attributes":{},"id":"7921","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"7918"},"major_label_policy":{"id":"7919"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7901"}},"id":"7900","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7887"},"glyph":{"id":"7912"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7913"},"view":{"id":"7915"}},"id":"7914","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"7900"},"ticker":null,"visible":false},"id":"7903","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"7908","type":"HoverTool"},{"attributes":{},"id":"7922","type":"AllLabels"}],"root_ids":["7889"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"d538d7fb-6bfc-4dc3-90ad-67279e791986","root_ids":["7889"],"roots":{"7889":"22efbd21-92c0-42f3-8189-65cc6ab2686c"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"5e4f421f-4d37-4d78-8e21-50a13bf77f8e":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"7925"},"glyph":{"id":"7950"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7951"},"view":{"id":"7953"}},"id":"7952","type":"GlyphRenderer"},{"attributes":{},"id":"7956","type":"BasicTickFormatter"},{"attributes":{"text":"Chicago \\u2192 Milwaukee"},"id":"7928","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"7946","type":"HoverTool"},{"attributes":{},"id":"7934","type":"LinearScale"},{"attributes":{"data":{"val":{"__ndarray__":"77/feXOnZEANsEXBwmFkQK7qUV0lG2RAK3zHOmbQZEDHsT+ae4ZlQPrdKj705GVA8nJ9xBR6ZkCt26D2m/hkQBQx2wROr2RAX8iPnVxlZEDC2r2BbidlQCV+INSg6WVApqYTv1hSZkDunME6qfBmQGz3YXPESWVAGrJwSNn8ZEAr9pfdk69kQFg5tMh2fmVAnprLDcZMZkA3HzJAvb9mQOnGBbE9Z2dAKhMj8OyaZUAgMwaMZEplQPcjoB3L+WRA75eqD3/VZUAXt3ZH669mQOPnGsEhLWdA5fBJJ9LdZ0DpLuRsFexlQCa0m8/vl2VAqAHeXQJEZUCF9qBWhyxmQI/TIYEQE2dAj7ADQoaaZ0DgGo6dZlRoQKhKpek9PWZALDUxE3vlZUB0L+adOY5lQBxVl52Pg2ZAChAFM2ZbZ0A6eezC6gdoQNxE0hP7ymhAZmZmZmaOZkAytsZWBjNmQCYNJN5w2GVAl2PD5JfaZkAI9ql0Qb5nQOZB1UNPdWhA124Wio9BaUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"7961"},"selection_policy":{"id":"7962"}},"id":"7925","type":"ColumnDataSource"},{"attributes":{},"id":"7957","type":"AllLabels"},{"attributes":{"end":6},"id":"7932","type":"Range1d"},{"attributes":{},"id":"7961","type":"Selection"},{"attributes":{},"id":"7936","type":"LinearScale"},{"attributes":{},"id":"7939","type":"BasicTicker"},{"attributes":{},"id":"7962","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"7926"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7950","type":"Rect"},{"attributes":{"end":6},"id":"7930","type":"Range1d"},{"attributes":{"below":[{"id":"7938"}],"center":[{"id":"7941"},{"id":"7945"}],"height":400,"left":[{"id":"7942"}],"renderers":[{"id":"7952"}],"title":{"id":"7928"},"toolbar":{"id":"7947"},"toolbar_location":null,"width":400,"x_range":{"id":"7930"},"x_scale":{"id":"7934"},"y_range":{"id":"7932"},"y_scale":{"id":"7936"}},"id":"7927","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7959","type":"BasicTickFormatter"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"7926","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"7956"},"major_label_policy":{"id":"7957"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7939"}},"id":"7938","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"7959"},"major_label_policy":{"id":"7960"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7943"}},"id":"7942","type":"LinearAxis"},{"attributes":{"axis":{"id":"7938"},"ticker":null,"visible":false},"id":"7941","type":"Grid"},{"attributes":{},"id":"7960","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"7926"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7951","type":"Rect"},{"attributes":{"source":{"id":"7925"}},"id":"7953","type":"CDSView"},{"attributes":{"axis":{"id":"7942"},"dimension":1,"ticker":null,"visible":false},"id":"7945","type":"Grid"},{"attributes":{},"id":"7943","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"7946"}]},"id":"7947","type":"Toolbar"}],"root_ids":["7927"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"5e4f421f-4d37-4d78-8e21-50a13bf77f8e","root_ids":["7927"],"roots":{"7927":"ce2b52f7-cd8e-4c9d-9def-dcd1399ad432"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"02d7b1f4-3c47-46e2-8627-4f8ccf1189e1":{"defs":[],"roots":{"references":[{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"7984","type":"HoverTool"},{"attributes":{"end":6},"id":"7968","type":"Range1d"},{"attributes":{"source":{"id":"7963"}},"id":"7991","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"7984"}]},"id":"7985","type":"Toolbar"},{"attributes":{},"id":"7977","type":"BasicTicker"},{"attributes":{},"id":"7995","type":"AllLabels"},{"attributes":{},"id":"7999","type":"Selection"},{"attributes":{},"id":"7972","type":"LinearScale"},{"attributes":{},"id":"7974","type":"LinearScale"},{"attributes":{},"id":"7997","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7963"},"glyph":{"id":"7988"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7989"},"view":{"id":"7991"}},"id":"7990","type":"GlyphRenderer"},{"attributes":{},"id":"8000","type":"UnionRenderers"},{"attributes":{"data":{"val":{"__ndarray__":"taM4Rw1FkEBkrgyqrTyQQBxF1hoqSJBAX7adtuZSkEChavRqIF+QQFTjpZtUa5BA3dH/cu1/kEBuFcRAx3KQQGe1wB4DapBAXDl7ZxR2kEDAzeLFYoGQQAnf+xtEjpBAiDB+GiebkEAMzApF6rCQQGU4ns8wmpBAyoegajSikEDkMJi/8qOQQAABa9Xer5BAclMDzWe9kECamZmZ+cqQQDvGFRfn4ZBA6Etvfz7FkEBsWikEosmQQI0MchfR0ZBAQDTz5FrekEC5401+i+yQQKwCtRjM+pBASNxj6eMSkUAOMPMdDP2QQKLSiJmtAZFAVkRN9CkFkUB/Z3v01gyRQCFYVS+vG5FA30+Nl54qkUB31m674EORQJMbRdaKKpFAcLA3MVQ1kUCQgqeQ6ziRQOF+wANTO5FAisxc4NJKkUDxuKgWcVqRQKbQeY3ddJFA7X+AtbpgkUDhehSuh2ORQKyRXWlpZ5FAILJIE89pkUDyQGSR9nmRQCUGgZVDipFAtObHX9qlkUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"7999"},"selection_policy":{"id":"8000"}},"id":"7963","type":"ColumnDataSource"},{"attributes":{"end":6},"id":"7970","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"7994"},"major_label_policy":{"id":"7995"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7977"}},"id":"7976","type":"LinearAxis"},{"attributes":{},"id":"7994","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"7997"},"major_label_policy":{"id":"7998"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"7981"}},"id":"7980","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"7964","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"7976"},"ticker":null,"visible":false},"id":"7979","type":"Grid"},{"attributes":{"below":[{"id":"7976"}],"center":[{"id":"7979"},{"id":"7983"}],"height":400,"left":[{"id":"7980"}],"renderers":[{"id":"7990"}],"title":{"id":"7966"},"toolbar":{"id":"7985"},"toolbar_location":null,"width":400,"x_range":{"id":"7968"},"x_scale":{"id":"7972"},"y_range":{"id":"7970"},"y_scale":{"id":"7974"}},"id":"7965","subtype":"Figure","type":"Plot"},{"attributes":{"text":"Chicago \\u2192 Montreal"},"id":"7966","type":"Title"},{"attributes":{"axis":{"id":"7980"},"dimension":1,"ticker":null,"visible":false},"id":"7983","type":"Grid"},{"attributes":{},"id":"7981","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"7964"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7988","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"7964"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7989","type":"Rect"},{"attributes":{},"id":"7998","type":"AllLabels"}],"root_ids":["7965"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"02d7b1f4-3c47-46e2-8627-4f8ccf1189e1","root_ids":["7965"],"roots":{"7965":"e695ef9e-f114-434e-9bc1-1860a88de113"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"e3dc2d43-54ca-4d96-b217-f0b09f0bd509":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8035","type":"BasicTickFormatter"},{"attributes":{},"id":"8015","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8002"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8026","type":"Rect"},{"attributes":{"below":[{"id":"8014"}],"center":[{"id":"8017"},{"id":"8021"}],"height":400,"left":[{"id":"8018"}],"renderers":[{"id":"8028"}],"title":{"id":"8004"},"toolbar":{"id":"8023"},"toolbar_location":null,"width":400,"x_range":{"id":"8006"},"x_scale":{"id":"8010"},"y_range":{"id":"8008"},"y_scale":{"id":"8012"}},"id":"8003","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8036","type":"AllLabels"},{"attributes":{"end":6},"id":"8006","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8032"},"major_label_policy":{"id":"8033"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8015"}},"id":"8014","type":"LinearAxis"},{"attributes":{},"id":"8037","type":"Selection"},{"attributes":{"data":{"val":{"__ndarray__":"hAGVO13WiUDarPpcbeuJQD0K16NQ5olAyPq8mDz8iUDle0YihASKQDdZ/td0/olAvaAqS7kAikBkzo6veCOKQBXAOchQOYpAUrgehZtBikCcs/RXPkuKQDUAZZ2rU4pA4EfaMhVNikAI46dxj0+KQEsveyOUcIpASj+GMzSHikB1myYiIpCKQPSqKSQkmopAzBgwktexikCPyqiNtZuKQFMlJZhlnopAypk3mGe9ikCFUsWeF9WKQJ8SIb+o3opAjeH7LODoikC7sNqhtgGLQDi5hOhV6opApfuUvjvtikAwWpHiLQqLQLrREQr7IotAw/UoXC8ti0AmGM41nDeLQKO0krGVUYtA5ztTQ/Y4i0DwPRLlETyLQCyPJPfaVotA9eRQdd5wi0BxPQrXU2qLQMBOoD5YhotAi7hKwXShi0CQKi+eloeLQDuAjwvoiotAJ8S3C4iji0ApZJ3gwb6LQEjhehTut4tAUvF/RxTVi0ClPW90z96LQD+t/fg21otAhsIMMr7Zi0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8037"},"selection_policy":{"id":"8038"}},"id":"8001","type":"ColumnDataSource"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8035"},"major_label_policy":{"id":"8036"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8019"}},"id":"8018","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8002","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"8014"},"ticker":null,"visible":false},"id":"8017","type":"Grid"},{"attributes":{},"id":"8032","type":"BasicTickFormatter"},{"attributes":{},"id":"8038","type":"UnionRenderers"},{"attributes":{"axis":{"id":"8018"},"dimension":1,"ticker":null,"visible":false},"id":"8021","type":"Grid"},{"attributes":{"data_source":{"id":"8001"},"glyph":{"id":"8026"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8027"},"view":{"id":"8029"}},"id":"8028","type":"GlyphRenderer"},{"attributes":{},"id":"8019","type":"BasicTicker"},{"attributes":{},"id":"8033","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8002"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8027","type":"Rect"},{"attributes":{"text":"Chicago \\u2192 Thunder Bay"},"id":"8004","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8022","type":"HoverTool"},{"attributes":{},"id":"8010","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"8022"}]},"id":"8023","type":"Toolbar"},{"attributes":{"end":6},"id":"8008","type":"Range1d"},{"attributes":{"source":{"id":"8001"}},"id":"8029","type":"CDSView"},{"attributes":{},"id":"8012","type":"LinearScale"}],"root_ids":["8003"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"e3dc2d43-54ca-4d96-b217-f0b09f0bd509","root_ids":["8003"],"roots":{"8003":"ba89d3f1-249f-4cd5-b919-9d1382f1e359"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"963a82ee-9697-4523-8ac8-6014715d9200":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"field":"val","transform":{"id":"8040"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8064","type":"Rect"},{"attributes":{"text":"Chicago \\u2192 Toledo"},"id":"8042","type":"Title"},{"attributes":{"below":[{"id":"8052"}],"center":[{"id":"8055"},{"id":"8059"}],"height":400,"left":[{"id":"8056"}],"renderers":[{"id":"8066"}],"title":{"id":"8042"},"toolbar":{"id":"8061"},"toolbar_location":null,"width":400,"x_range":{"id":"8044"},"x_scale":{"id":"8048"},"y_range":{"id":"8046"},"y_scale":{"id":"8050"}},"id":"8041","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8048","type":"LinearScale"},{"attributes":{"source":{"id":"8039"}},"id":"8067","type":"CDSView"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8040","type":"LinearColorMapper"},{"attributes":{"end":6},"id":"8046","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8040"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8065","type":"Rect"},{"attributes":{},"id":"8050","type":"LinearScale"},{"attributes":{},"id":"8075","type":"Selection"},{"attributes":{},"id":"8053","type":"BasicTicker"},{"attributes":{},"id":"8073","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8039"},"glyph":{"id":"8064"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8065"},"view":{"id":"8067"}},"id":"8066","type":"GlyphRenderer"},{"attributes":{},"id":"8076","type":"UnionRenderers"},{"attributes":{"data":{"val":{"__ndarray__":"WKQuvm2xdEDj5q/rspN0QCYvfI6ZtHRApfeNrz3sdEBGtYgophx1QNtAcEv6THVATKNuDEZ4dUDV7x2Qv/h0QL5nJEID2XRAr3GiAiz8dEDqBDQRtjd1QBAdp42Pa3VAyL2vgFifdUBVDWcjvM11QFI7DWIRQHVApxB+mFMedUA5tMh2vkN1QDAS2nIug3VA56yq8ni6dUC2Ou+1tvF1QF93XzoyI3ZAz4b8M2OHdUCQudfuo2N1QMP27upQi3VAdR+A1KbOdUC/PK5XYgl2QKO3LusURHZAaOFXUah4dkBM0usFtc51QGs6TEX0qHVATTkVX+PSdUC6LCY2Hxp2QImkzLxLWHZAkTRuIHOWdkByS1BoHs52QMgd29cGFnZAVOOlm0TudUDKU1bTdRp2QAA6zJeXZXZAYDTQITWndkB/sa1V0eh2QHu1SH+UI3dARWnKqVhddkA9jP/xlDN2QFSWfEcIYnZARUdy+Q+xdkA4xNOGHvZ2QGwu7YovO3dAhR9Blgp5d0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8075"},"selection_policy":{"id":"8076"}},"id":"8039","type":"ColumnDataSource"},{"attributes":{"end":6},"id":"8044","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8060","type":"HoverTool"},{"attributes":{},"id":"8074","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8070"},"major_label_policy":{"id":"8071"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8053"}},"id":"8052","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8073"},"major_label_policy":{"id":"8074"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8057"}},"id":"8056","type":"LinearAxis"},{"attributes":{"axis":{"id":"8052"},"ticker":null,"visible":false},"id":"8055","type":"Grid"},{"attributes":{},"id":"8070","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8056"},"dimension":1,"ticker":null,"visible":false},"id":"8059","type":"Grid"},{"attributes":{},"id":"8057","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"8060"}]},"id":"8061","type":"Toolbar"},{"attributes":{},"id":"8071","type":"AllLabels"}],"root_ids":["8041"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"963a82ee-9697-4523-8ac8-6014715d9200","root_ids":["8041"],"roots":{"8041":"118a26b2-c971-4f7d-8a54-2389ba491dbe"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"05171bc6-0add-4af7-bf34-8a716c68cc41":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8086","type":"LinearScale"},{"attributes":{"below":[{"id":"8090"}],"center":[{"id":"8093"},{"id":"8097"}],"height":400,"left":[{"id":"8094"}],"renderers":[{"id":"8104"}],"title":{"id":"8080"},"toolbar":{"id":"8099"},"toolbar_location":null,"width":400,"x_range":{"id":"8082"},"x_scale":{"id":"8086"},"y_range":{"id":"8084"},"y_scale":{"id":"8088"}},"id":"8079","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"8098"}]},"id":"8099","type":"Toolbar"},{"attributes":{"source":{"id":"8077"}},"id":"8105","type":"CDSView"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8078","type":"LinearColorMapper"},{"attributes":{},"id":"8114","type":"UnionRenderers"},{"attributes":{"end":6},"id":"8084","type":"Range1d"},{"attributes":{},"id":"8088","type":"LinearScale"},{"attributes":{},"id":"8111","type":"BasicTickFormatter"},{"attributes":{},"id":"8109","type":"AllLabels"},{"attributes":{},"id":"8091","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8077"},"glyph":{"id":"8102"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8103"},"view":{"id":"8105"}},"id":"8104","type":"GlyphRenderer"},{"attributes":{},"id":"8112","type":"AllLabels"},{"attributes":{"data":{"val":{"__ndarray__":"o1Em2moMhECSulPwagqEQKPnFrryF4RA6n0+JUIVhEB27/K+WxKEQB20stjhFYRA9ihcj8IbhEAE1fX6yU2EQOjxIOIbUYRAB9c3i6JZhEDCeLx/wlaEQGFwzR2NU4RACVOUSyNXhEAxPzc0FV2EQGRYxRspj4RA4uJNI2KShEDshDwnUpuEQJPfR9pCmIRAS/GnfL6UhEBVpS2u0aCEQGbBH9lnnoRAy2+HPIjQhEAHS9C6wdmEQOFcaFOa1oRAatrFNMPZhEAv3o/b79WEQA+0p4lz4oRAotf6fbrfhECVvJWAAxiFQCmIyztIG4VAGhajrvUXhUCThVT2YiKFQMwTY/QXF4VAyMIhZRUkhUDe7dUiDSGFQEaCBCCZWYVAU1m5vM5chUBUz90JUVmFQHoi46wzZIVADXWzmilYhUCC0ZtAt2WFQBNwvsdfYoVAht6HKBubhUB1lrQ9VZ6FQI2IGGWsmoVAWSt/YwSmhUBO1gNBO5mFQK82ENwinYVAToaZbLKjhUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8113"},"selection_policy":{"id":"8114"}},"id":"8077","type":"ColumnDataSource"},{"attributes":{"end":6},"id":"8082","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8108"},"major_label_policy":{"id":"8109"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8091"}},"id":"8090","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8111"},"major_label_policy":{"id":"8112"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8095"}},"id":"8094","type":"LinearAxis"},{"attributes":{"axis":{"id":"8090"},"ticker":null,"visible":false},"id":"8093","type":"Grid"},{"attributes":{},"id":"8108","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8094"},"dimension":1,"ticker":null,"visible":false},"id":"8097","type":"Grid"},{"attributes":{},"id":"8095","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8078"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8103","type":"Rect"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8078"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8102","type":"Rect"},{"attributes":{},"id":"8113","type":"Selection"},{"attributes":{"text":"Chicago \\u2192 Toronto"},"id":"8080","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8098","type":"HoverTool"}],"root_ids":["8079"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"05171bc6-0add-4af7-bf34-8a716c68cc41","root_ids":["8079"],"roots":{"8079":"4bb4b242-022d-4d57-bed0-e718801871cb"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"311bdfcb-9a4e-43b4-95ef-6be4c100b203":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"8115"}},"id":"8143","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8116"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8141","type":"Rect"},{"attributes":{},"id":"8152","type":"UnionRenderers"},{"attributes":{},"id":"8124","type":"LinearScale"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8116"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8140","type":"Rect"},{"attributes":{},"id":"8126","type":"LinearScale"},{"attributes":{},"id":"8149","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8115"},"glyph":{"id":"8140"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8141"},"view":{"id":"8143"}},"id":"8142","type":"GlyphRenderer"},{"attributes":{"end":6},"id":"8120","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"vCGNCjyEdkBgHccPNYt2QHxLlBg/dHZAPUSjO4hrdkB7xhketoF2QNn0VhM6rnZA4ue/Bw/rdkCIYwIjdM52QFcFD3jl1XZAksoUc5C9dkChZ7Pqc7R2QBH1zNxNzHZAyL2vgBj8dkAYey++6Dx3QGDNXDusGHdAHs8ds4IQd0CpSZXN4QZ3QAWLw5lf/XZAmfuam+UWd0CqXiPu9kl3QEDmuXTCjndAOTe3U+Rid0DLoUW2M1p3QL/IFSgzUHdAaK7TSEtGd0CcsR6tgGF3QIv/llvVl3dAdnkpK5zgd0ASoRFsHK13QHh0bbnko3dA1keWgoSZd0DM0eP3No93QM7ixcJQrHdAbaAKybPld0Ce5LPhdTJ4QOsKbIRU93dAB3h3CdPad0Dsxhbd1eJ3QDD186Yi2HdAABRt2CD3d0BcaWM2kjN4QNR3I5hPhHhAt0zhnIxBeEDOSqR+qCN4QAJGlzcnLHhAkxgEVg4heEAxRRTu8EF4QD0K16NwgXhACguTTinWeEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8151"},"selection_policy":{"id":"8152"}},"id":"8115","type":"ColumnDataSource"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8116","type":"LinearColorMapper"},{"attributes":{"below":[{"id":"8128"}],"center":[{"id":"8131"},{"id":"8135"}],"height":400,"left":[{"id":"8132"}],"renderers":[{"id":"8142"}],"title":{"id":"8118"},"toolbar":{"id":"8137"},"toolbar_location":null,"width":400,"x_range":{"id":"8120"},"x_scale":{"id":"8124"},"y_range":{"id":"8122"},"y_scale":{"id":"8126"}},"id":"8117","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"8122","type":"Range1d"},{"attributes":{},"id":"8129","type":"BasicTicker"},{"attributes":{},"id":"8150","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8146"},"major_label_policy":{"id":"8147"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8129"}},"id":"8128","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8149"},"major_label_policy":{"id":"8150"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8133"}},"id":"8132","type":"LinearAxis"},{"attributes":{"axis":{"id":"8128"},"ticker":null,"visible":false},"id":"8131","type":"Grid"},{"attributes":{},"id":"8146","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8132"},"dimension":1,"ticker":null,"visible":false},"id":"8135","type":"Grid"},{"attributes":{},"id":"8133","type":"BasicTicker"},{"attributes":{},"id":"8147","type":"AllLabels"},{"attributes":{},"id":"8151","type":"Selection"},{"attributes":{"text":"Chicago \\u2192 Windsor"},"id":"8118","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8136","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"8136"}]},"id":"8137","type":"Toolbar"}],"root_ids":["8117"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"311bdfcb-9a4e-43b4-95ef-6be4c100b203","root_ids":["8117"],"roots":{"8117":"41cf0dc7-147b-44e0-b87f-4c7a29b57c2a"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"faa54c60-7748-4085-9b52-fdbed44f4d06":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"8170"},"dimension":1,"ticker":null,"visible":false},"id":"8173","type":"Grid"},{"attributes":{},"id":"8187","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8153"},"glyph":{"id":"8178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8179"},"view":{"id":"8181"}},"id":"8180","type":"GlyphRenderer"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8154","type":"LinearColorMapper"},{"attributes":{},"id":"8171","type":"BasicTicker"},{"attributes":{"end":6},"id":"8160","type":"Range1d"},{"attributes":{},"id":"8188","type":"AllLabels"},{"attributes":{},"id":"8164","type":"LinearScale"},{"attributes":{"below":[{"id":"8166"}],"center":[{"id":"8169"},{"id":"8173"}],"height":400,"left":[{"id":"8170"}],"renderers":[{"id":"8180"}],"title":{"id":"8156"},"toolbar":{"id":"8175"},"toolbar_location":null,"width":400,"x_range":{"id":"8158"},"x_scale":{"id":"8162"},"y_range":{"id":"8160"},"y_scale":{"id":"8164"}},"id":"8155","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"8174"}]},"id":"8175","type":"Toolbar"},{"attributes":{"axis":{"id":"8166"},"ticker":null,"visible":false},"id":"8169","type":"Grid"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8154"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8178","type":"Rect"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8187"},"major_label_policy":{"id":"8188"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8171"}},"id":"8170","type":"LinearAxis"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8174","type":"HoverTool"},{"attributes":{},"id":"8167","type":"BasicTicker"},{"attributes":{},"id":"8184","type":"BasicTickFormatter"},{"attributes":{"text":"Cleveland \\u2192 Chicago"},"id":"8156","type":"Title"},{"attributes":{"data":{"val":{"__ndarray__":"AvOQKX/Ae0DYvtsXy7x7QI+qJoi6p3tAKnf6nDame0BHuxtVV457QAKaCBueX3tAzuT2JqGZe0D6tmCpTvh7QLk58MVy93tAlkOLbOcLfECNTHYiFwp8QCOUCJ7s8HtADAIrh5a/e0B+XqdHCf57QPKaV3W2WnxAdqM0QG4rfEAeigJ9IkN8QOT5DKj3bXxADJXa5oFTfEAWak3zjh98QCGwcmhxYnxAfT81Xjq9fECHFtnOt4p8QM0jfzDwo3xAR8+ILdjRfED2lawvF7Z8QCDSb1+Hf3xAwwE+idnGfEB+c9quyx99QJmJfV0B6nxAe737470EfUCqpASzuDV9QN+WfnisGH1AKjqSy3/ffEBmUwmqQSt9QI3PZP9cgn1AndQ87EpJfUAqV3iXi2V9QA56gDiZmX1Au29rwUF7fUA0orQ3eD99QBbNucqpj31AjwMKUO7kfUCuR+F6lKh9QNjw9EpZxn1AcU/8vXn9fUCkcD0K1919QD0K16Nwn31AuB6F6xH0fUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8189"},"selection_policy":{"id":"8190"}},"id":"8153","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8154"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8179","type":"Rect"},{"attributes":{},"id":"8185","type":"AllLabels"},{"attributes":{},"id":"8189","type":"Selection"},{"attributes":{},"id":"8162","type":"LinearScale"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8184"},"major_label_policy":{"id":"8185"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8167"}},"id":"8166","type":"LinearAxis"},{"attributes":{"source":{"id":"8153"}},"id":"8181","type":"CDSView"},{"attributes":{},"id":"8190","type":"UnionRenderers"},{"attributes":{"end":6},"id":"8158","type":"Range1d"}],"root_ids":["8155"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"faa54c60-7748-4085-9b52-fdbed44f4d06","root_ids":["8155"],"roots":{"8155":"db9842af-a26e-4a2e-ad69-f5e60812b55b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"7ddda877-81d6-4a92-80d5-24b186c6634c":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"8191"},"glyph":{"id":"8216"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8217"},"view":{"id":"8219"}},"id":"8218","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"8212"}]},"id":"8213","type":"Toolbar"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8225"},"major_label_policy":{"id":"8226"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8209"}},"id":"8208","type":"LinearAxis"},{"attributes":{},"id":"8226","type":"AllLabels"},{"attributes":{"axis":{"id":"8208"},"dimension":1,"ticker":null,"visible":false},"id":"8211","type":"Grid"},{"attributes":{},"id":"8209","type":"BasicTicker"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8212","type":"HoverTool"},{"attributes":{"end":6},"id":"8196","type":"Range1d"},{"attributes":{},"id":"8222","type":"BasicTickFormatter"},{"attributes":{"text":"Cleveland \\u2192 Detroit"},"id":"8194","type":"Title"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8192"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8216","type":"Rect"},{"attributes":{},"id":"8223","type":"AllLabels"},{"attributes":{},"id":"8227","type":"Selection"},{"attributes":{},"id":"8200","type":"LinearScale"},{"attributes":{"end":6},"id":"8198","type":"Range1d"},{"attributes":{},"id":"8202","type":"LinearScale"},{"attributes":{"source":{"id":"8191"}},"id":"8219","type":"CDSView"},{"attributes":{},"id":"8228","type":"UnionRenderers"},{"attributes":{"axis":{"id":"8204"},"ticker":null,"visible":false},"id":"8207","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8192"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8217","type":"Rect"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8192","type":"LinearColorMapper"},{"attributes":{},"id":"8205","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"L6hvmZPMakBOQ1ThD8tqQMgKfhuin2pAajANw4fWakDZs+cy9WhrQDlQlhBi6WtAZeHrax1vbEDKth1kIytrQD6llCFYKWtAgtAwaxj7akC96lysQzZrQLnXkwo002tA9mYvNkhdbEDCTxxA/+xsQIEVli6ziWtALgfVYaCHa0A9luO6jlZrQA+lrJX/lWtAOZWxRmI9bECYLf5bLtFsQARughTham1ArmdjgF/oa0A5ud+h6OVrQE2MwLMYsmtAYl/8frv1a0D1ozxO7KFsQFVEl4EURW1ARozo6MLobUBHFtXHKGFsQCgbIOIwRGxAn0GeuLcNbEC0GUxod1VsQNmY1xEHDG1A9wpmp/q4bUCIqk69pGZuQMq2HWQjwWxAGH1gInmibEClx6XgX2lsQAbUm1EztWxAvI1y1SF2bUD+xX31wixuQOUYf5GG5G5ATVdmAB4hbUDTILvBxgBtQJH94ggIxWxAiZ2ELVEZbUCFMkOZPOBtQANxw5RtoG5AJzflZWhib0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8227"},"selection_policy":{"id":"8228"}},"id":"8191","type":"ColumnDataSource"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8222"},"major_label_policy":{"id":"8223"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8205"}},"id":"8204","type":"LinearAxis"},{"attributes":{"below":[{"id":"8204"}],"center":[{"id":"8207"},{"id":"8211"}],"height":400,"left":[{"id":"8208"}],"renderers":[{"id":"8218"}],"title":{"id":"8194"},"toolbar":{"id":"8213"},"toolbar_location":null,"width":400,"x_range":{"id":"8196"},"x_scale":{"id":"8200"},"y_range":{"id":"8198"},"y_scale":{"id":"8202"}},"id":"8193","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8225","type":"BasicTickFormatter"}],"root_ids":["8193"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"7ddda877-81d6-4a92-80d5-24b186c6634c","root_ids":["8193"],"roots":{"8193":"8d1dd96a-8f0e-4643-8d58-0a58533bb58f"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"ce13aef4-79f9-4a6c-93ad-d89a0554153a":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8260"},"major_label_policy":{"id":"8261"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8243"}},"id":"8242","type":"LinearAxis"},{"attributes":{},"id":"8266","type":"UnionRenderers"},{"attributes":{"axis":{"id":"8246"},"dimension":1,"ticker":null,"visible":false},"id":"8249","type":"Grid"},{"attributes":{},"id":"8247","type":"BasicTicker"},{"attributes":{"source":{"id":"8229"}},"id":"8257","type":"CDSView"},{"attributes":{"data":{"val":{"__ndarray__":"O0DmuUT1jUADZEOSJPWNQP5tBQMu9Y1AWFcFaoH6jUC9BtiiUAWOQCtdC8RcBY5AJQaBlUMHjkArJoCsAUqOQHzgGSPYSY5AkMoDR+hJjkDQm4pUyE+OQLQSBNlcW45AWXm403xbjkDQGs3bsl2OQBsMGp++no5A9Vzws4uejkAiJwKLop6OQE90Aj8PpY5ArB4wD2mxjkCaGNwgpKSOQHWbJiIitI5ACvKzkXvzjkBu2cZEP/OOQLODAM9c845Ax7iHKVb6jkA27FJ+fQePQL1fu2ok+o5AIbByaJEKj0ABbECEOEiPQI8vRsmQPI9AMSQnExdIj0BZTdcTnU+PQMnJxK2iXY9AxVbQtKRPj0DggJauAGGPQNYBEHf1nI9AroBCPb2Qj0DDgCVX0ZyPQNGRXP7jpI9AvEG0VvSkj0Ak0jb+JKWPQF2JQPVvt49AUKp9Or7xj0CF61G4nvGPQFXdI5uL8Y9AwTdNn13qj0C0rWadUfqPQECFI0il+o9ADi2yne8GkEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8265"},"selection_policy":{"id":"8266"}},"id":"8229","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8229"},"glyph":{"id":"8254"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8255"},"view":{"id":"8257"}},"id":"8256","type":"GlyphRenderer"},{"attributes":{"text":"Cleveland \\u2192 Duluth"},"id":"8232","type":"Title"},{"attributes":{},"id":"8261","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8250","type":"HoverTool"},{"attributes":{},"id":"8238","type":"LinearScale"},{"attributes":{},"id":"8260","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"8250"}]},"id":"8251","type":"Toolbar"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8230"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8254","type":"Rect"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8230","type":"LinearColorMapper"},{"attributes":{},"id":"8264","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8230"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8255","type":"Rect"},{"attributes":{"end":6},"id":"8236","type":"Range1d"},{"attributes":{},"id":"8263","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8242"}],"center":[{"id":"8245"},{"id":"8249"}],"height":400,"left":[{"id":"8246"}],"renderers":[{"id":"8256"}],"title":{"id":"8232"},"toolbar":{"id":"8251"},"toolbar_location":null,"width":400,"x_range":{"id":"8234"},"x_scale":{"id":"8238"},"y_range":{"id":"8236"},"y_scale":{"id":"8240"}},"id":"8231","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8240","type":"LinearScale"},{"attributes":{},"id":"8243","type":"BasicTicker"},{"attributes":{"end":6},"id":"8234","type":"Range1d"},{"attributes":{},"id":"8265","type":"Selection"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8263"},"major_label_policy":{"id":"8264"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8247"}},"id":"8246","type":"LinearAxis"},{"attributes":{"axis":{"id":"8242"},"ticker":null,"visible":false},"id":"8245","type":"Grid"}],"root_ids":["8231"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"ce13aef4-79f9-4a6c-93ad-d89a0554153a","root_ids":["8231"],"roots":{"8231":"68f59370-ab4d-4758-b896-cf74d3eebd51"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"d45274cf-5b04-4769-9692-758c30455763":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"8272","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8298"},"major_label_policy":{"id":"8299"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8281"}},"id":"8280","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8301"},"major_label_policy":{"id":"8302"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8285"}},"id":"8284","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"QihKnbu7dUCQSUbOwsp1QGXw5l8h3nVAmwsSkTDPdUBDe1CrY7F1QLByaJENuHVADCSDN3/ddUCXSR6ZWAt2QOELk6mCG3ZApYuo5BcwdkAkTXJ2ASB2QJL9mHtNAHZA16NwPaoHdkDe04uQEDB2QOxq8pT1WnZAMc7fhEJsdkDlJmppDoJ2QK6O0lvScHZA8KfGSzdPdkD+1HjpRld2QLCDlOmhgnZAQYzGkJKqdkCCkCxgAr12QCbCK+4E1HZAN9AyQaPBdkBNUvQbIZ52QCUGgZXjpnZAgjOdQjPVdkCWrZqML/p2QNJSeTvCDXdAZl3tcvsld0DAEZMmdBJ3QJ3UPOwK7XZATDeJQYD2dkBU46WbxCd3QOvObojMSXdAIxXGFoJed0Cm+K738Xd3QElT8wtFY3dA+n5qvPQ7d0BzaJHtHEZ3QCaTrvRVendAQPBChGmZd0Bz1xLyQa93QOeTcHzoyXdA05RT8RW0d0BXKZiM3op3QJqZmZm5lXdA+EK3TefMd0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8303"},"selection_policy":{"id":"8304"}},"id":"8267","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"8280"},"ticker":null,"visible":false},"id":"8283","type":"Grid"},{"attributes":{},"id":"8298","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8284"},"dimension":1,"ticker":null,"visible":false},"id":"8287","type":"Grid"},{"attributes":{},"id":"8285","type":"BasicTicker"},{"attributes":{},"id":"8304","type":"UnionRenderers"},{"attributes":{},"id":"8299","type":"AllLabels"},{"attributes":{"text":"Cleveland \\u2192 Hamilton"},"id":"8270","type":"Title"},{"attributes":{},"id":"8302","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8288","type":"HoverTool"},{"attributes":{},"id":"8276","type":"LinearScale"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8268"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8292","type":"Rect"},{"attributes":{"active_multi":null,"tools":[{"id":"8288"}]},"id":"8289","type":"Toolbar"},{"attributes":{"below":[{"id":"8280"}],"center":[{"id":"8283"},{"id":"8287"}],"height":400,"left":[{"id":"8284"}],"renderers":[{"id":"8294"}],"title":{"id":"8270"},"toolbar":{"id":"8289"},"toolbar_location":null,"width":400,"x_range":{"id":"8272"},"x_scale":{"id":"8276"},"y_range":{"id":"8274"},"y_scale":{"id":"8278"}},"id":"8269","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"8267"}},"id":"8295","type":"CDSView"},{"attributes":{"end":6},"id":"8274","type":"Range1d"},{"attributes":{},"id":"8301","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8268"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8293","type":"Rect"},{"attributes":{},"id":"8278","type":"LinearScale"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8268","type":"LinearColorMapper"},{"attributes":{},"id":"8303","type":"Selection"},{"attributes":{},"id":"8281","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8267"},"glyph":{"id":"8292"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8293"},"view":{"id":"8295"}},"id":"8294","type":"GlyphRenderer"}],"root_ids":["8269"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"d45274cf-5b04-4769-9692-758c30455763","root_ids":["8269"],"roots":{"8269":"aacaefb9-a18f-4d89-b374-9c01751fa93a"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"7ea73358-eb78-48a1-b5d0-391f9031d60b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8340","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8336"},"major_label_policy":{"id":"8337"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8319"}},"id":"8318","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8339"},"major_label_policy":{"id":"8340"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8323"}},"id":"8322","type":"LinearAxis"},{"attributes":{"axis":{"id":"8318"},"ticker":null,"visible":false},"id":"8321","type":"Grid"},{"attributes":{},"id":"8336","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8322"},"dimension":1,"ticker":null,"visible":false},"id":"8325","type":"Grid"},{"attributes":{},"id":"8323","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8306"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8331","type":"Rect"},{"attributes":{},"id":"8337","type":"AllLabels"},{"attributes":{"text":"Cleveland \\u2192 Milwaukee"},"id":"8308","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8326","type":"HoverTool"},{"attributes":{},"id":"8314","type":"LinearScale"},{"attributes":{"source":{"id":"8305"}},"id":"8333","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8326"}]},"id":"8327","type":"Toolbar"},{"attributes":{"end":6},"id":"8312","type":"Range1d"},{"attributes":{},"id":"8341","type":"Selection"},{"attributes":{},"id":"8316","type":"LinearScale"},{"attributes":{"data":{"val":{"__ndarray__":"uXguQufggECZ0p+i7+WAQARpEDC05IBAMyslFcfmgEDyjp0B3+SAQBlwO9ky3YBA5WYTu4HigEB9rfDT/RmBQJJldzdFH4FA+ovqvt0dgUCCnVGp6B+BQPwi/ObZHYFAMLcgAJ0VgUCfWRKgNhuBQI3OnnALU4FAkoxBzJpYgUDqGtJNB1eBQNejcD0KWYFA2UP7WNFWgUBAahMnB06BQFK4HoXrU4FAhrQhWhaMgUC5Mk199ZGBQOE9rNwwkIFALaqP0SuSgUAqzNZVvI+BQFAdBk5xhoFABRcraqCMgUA/f5AbFMWBQCamC7Fay4FAYwrWOBvOgUDJ3TGGU8uBQHXAv1KnyIFAYdD4dNu+gUC/CSpPVcWBQP7d8dwR/oFATk8OVYcJgkAWsqmpiweCQAHmECcGCoJAxkibT5IBgkBCAYAI5v2BQHJoNjQK/oFAt6hgng83gkDZpsLpHkOCQIy0nmuZQ4JAOay6WHJDgkARPYRMfTqCQO1HisigNoJAJcdCGb82gkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8341"},"selection_policy":{"id":"8342"}},"id":"8305","type":"ColumnDataSource"},{"attributes":{},"id":"8319","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8305"},"glyph":{"id":"8330"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8331"},"view":{"id":"8333"}},"id":"8332","type":"GlyphRenderer"},{"attributes":{},"id":"8339","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8306"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8330","type":"Rect"},{"attributes":{},"id":"8342","type":"UnionRenderers"},{"attributes":{"below":[{"id":"8318"}],"center":[{"id":"8321"},{"id":"8325"}],"height":400,"left":[{"id":"8322"}],"renderers":[{"id":"8332"}],"title":{"id":"8308"},"toolbar":{"id":"8327"},"toolbar_location":null,"width":400,"x_range":{"id":"8310"},"x_scale":{"id":"8314"},"y_range":{"id":"8312"},"y_scale":{"id":"8316"}},"id":"8307","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"8310","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8306","type":"LinearColorMapper"}],"root_ids":["8307"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"7ea73358-eb78-48a1-b5d0-391f9031d60b","root_ids":["8307"],"roots":{"8307":"f25da4b2-f772-4ecc-aa77-cd243c1f69fc"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"61377979-abeb-4a65-9d65-4790156ca620":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"8356"},"ticker":null,"visible":false},"id":"8359","type":"Grid"},{"attributes":{},"id":"8374","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"vjULDxWDhUDkH2xn7oaFQAo4Op2qjIVAbK4/LkaXhUBx7mWRHKeFQHx716DfooVAL90kBoGthUDOkyF9GdSFQE2UztH00IVAXnTDANPWhUBo/j0d5NeFQGohtxXB3YVAYxsCkS/khUDF+xZCg++FQEEolCpGFYZAYbE8/pERhkDRwUTNkReGQHq1kgy/IoZAeDLuvLMehkBuTiUD8DCGQFsaCX6FMYZAs7wG2HJWhkB1zqoqL1KGQJOcXQjDY4ZAv2uGCgRkhkCArzJkpl+GQLLZkerrcoZA8Tj7uYdzhkAlUXmFn5eGQInrGFfMkoZAtA79yS6lhkAFInoISaWGQI7AaQuZoIZAEqJ8QeunhkCHV+31ibWGQJfl6zLM2IZAnQiHg2nThkDbFI+LmuaGQEvYbQaO5oZAlj2usovhhkD+mNamwfaGQB123zGM94ZAkdRCycQmh0AeuX92ASGHQPyGLk0GKIdAkI5hBNMnh0CkTuVZfiKHQDrJ+92gOIdArADfbY45h0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8379"},"selection_policy":{"id":"8380"}},"id":"8343","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"8360"},"dimension":1,"ticker":null,"visible":false},"id":"8363","type":"Grid"},{"attributes":{},"id":"8361","type":"BasicTicker"},{"attributes":{},"id":"8375","type":"AllLabels"},{"attributes":{"text":"Cleveland \\u2192 Montreal"},"id":"8346","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8364","type":"HoverTool"},{"attributes":{},"id":"8352","type":"LinearScale"},{"attributes":{"source":{"id":"8343"}},"id":"8371","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8364"}]},"id":"8365","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8344"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8369","type":"Rect"},{"attributes":{"end":6},"id":"8350","type":"Range1d"},{"attributes":{},"id":"8379","type":"Selection"},{"attributes":{},"id":"8354","type":"LinearScale"},{"attributes":{},"id":"8377","type":"BasicTickFormatter"},{"attributes":{},"id":"8357","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8343"},"glyph":{"id":"8368"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8369"},"view":{"id":"8371"}},"id":"8370","type":"GlyphRenderer"},{"attributes":{},"id":"8378","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8344"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8368","type":"Rect"},{"attributes":{"end":6},"id":"8348","type":"Range1d"},{"attributes":{},"id":"8380","type":"UnionRenderers"},{"attributes":{"below":[{"id":"8356"}],"center":[{"id":"8359"},{"id":"8363"}],"height":400,"left":[{"id":"8360"}],"renderers":[{"id":"8370"}],"title":{"id":"8346"},"toolbar":{"id":"8365"},"toolbar_location":null,"width":400,"x_range":{"id":"8348"},"x_scale":{"id":"8352"},"y_range":{"id":"8350"},"y_scale":{"id":"8354"}},"id":"8345","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8344","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8374"},"major_label_policy":{"id":"8375"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8357"}},"id":"8356","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8377"},"major_label_policy":{"id":"8378"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8361"}},"id":"8360","type":"LinearAxis"}],"root_ids":["8345"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"61377979-abeb-4a65-9d65-4790156ca620","root_ids":["8345"],"roots":{"8345":"6d44d9e8-5489-4d06-81ec-7607ab2a7673"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"5dae5ba8-8382-409f-9dc8-906fb9cdbc10":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8412","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8398"},"dimension":1,"ticker":null,"visible":false},"id":"8401","type":"Grid"},{"attributes":{},"id":"8399","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8382"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8407","type":"Rect"},{"attributes":{},"id":"8413","type":"AllLabels"},{"attributes":{},"id":"8417","type":"Selection"},{"attributes":{"text":"Cleveland \\u2192 Thunder Bay"},"id":"8384","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8402","type":"HoverTool"},{"attributes":{},"id":"8390","type":"LinearScale"},{"attributes":{"source":{"id":"8381"}},"id":"8409","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8402"}]},"id":"8403","type":"Toolbar"},{"attributes":{},"id":"8418","type":"UnionRenderers"},{"attributes":{"end":6},"id":"8388","type":"Range1d"},{"attributes":{},"id":"8392","type":"LinearScale"},{"attributes":{},"id":"8395","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8381"},"glyph":{"id":"8406"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8407"},"view":{"id":"8409"}},"id":"8408","type":"GlyphRenderer"},{"attributes":{},"id":"8415","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8382"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8406","type":"Rect"},{"attributes":{"below":[{"id":"8394"}],"center":[{"id":"8397"},{"id":"8401"}],"height":400,"left":[{"id":"8398"}],"renderers":[{"id":"8408"}],"title":{"id":"8384"},"toolbar":{"id":"8403"},"toolbar_location":null,"width":400,"x_range":{"id":"8386"},"x_scale":{"id":"8390"},"y_range":{"id":"8388"},"y_scale":{"id":"8392"}},"id":"8383","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"8386","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8382","type":"LinearColorMapper"},{"attributes":{},"id":"8416","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8412"},"major_label_policy":{"id":"8413"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8395"}},"id":"8394","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8415"},"major_label_policy":{"id":"8416"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8399"}},"id":"8398","type":"LinearAxis"},{"attributes":{"axis":{"id":"8394"},"ticker":null,"visible":false},"id":"8397","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"Qs9m1Wf6kUAj2/l+auSRQCPb+X5q5JFAI9v5fmrkkUD4MlGENLuRQPgyUYQ0u5FA0SLb+U6akUCq8dJNojaSQM3MzMwMH5JAzczMzAwfkkDNzMzMDB+SQLND/MPm8pFAs0P8w+bykUAEPGnhos+RQBIUP8bccpJAd76fGq9ZkkB3vp8ar1mSQHe+nxqvWZJATHDqA5kqkkBMcOoDmSqSQFg5tMj2BJJAejarPhevkkAhsHJoUZSSQCGwcmhRlJJAIbByaFGUkkAGgZVDS2KSQAaBlUNLYpJAi1JCsEo6kkDiWBe3UeuSQMuhRbbzzpJAy6FFtvPOkkDLoUW2886SQMGRQIP9mZJAwZFAg/2ZkkDfT42Xnm+SQEp7gy+MJ5NAdZMYBJYJk0B1kxgElgmTQHWTGASWCZNAWb4uw6/RkkBZvi7Dr9GSQDRN2H7ypJJAsp3vp8Zjk0AfhetROESTQB+F61E4RJNAH4XrUThEk0AUz9kCYgmTQBTP2QJiCZNAZmZmZkbakkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8417"},"selection_policy":{"id":"8418"}},"id":"8381","type":"ColumnDataSource"}],"root_ids":["8383"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"5dae5ba8-8382-409f-9dc8-906fb9cdbc10","root_ids":["8383"],"roots":{"8383":"ccf99845-8fa5-411d-9660-029878d23c4f"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"69155b82-ba62-47bf-b562-fb23d0a4ec2e":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8451","type":"AllLabels"},{"attributes":{},"id":"8455","type":"Selection"},{"attributes":{"axis":{"id":"8436"},"dimension":1,"ticker":null,"visible":false},"id":"8439","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8440","type":"HoverTool"},{"attributes":{},"id":"8437","type":"BasicTicker"},{"attributes":{"source":{"id":"8419"}},"id":"8447","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8440"}]},"id":"8441","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8420"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8445","type":"Rect"},{"attributes":{},"id":"8456","type":"UnionRenderers"},{"attributes":{},"id":"8453","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8453"},"major_label_policy":{"id":"8454"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8437"}},"id":"8436","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8419"},"glyph":{"id":"8444"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8445"},"view":{"id":"8447"}},"id":"8446","type":"GlyphRenderer"},{"attributes":{"text":"Cleveland \\u2192 Toledo"},"id":"8422","type":"Title"},{"attributes":{},"id":"8428","type":"LinearScale"},{"attributes":{"data":{"val":{"__ndarray__":"SC05k1uFY0D5hVeSfJdjQPyp8dJNomNAI9v5fmqiY0As7Xmje4ZjQNzfj5GiTmNAJTbEHZSKY0DXo3A9CtljQEsFFVV/7GNAF+Qdlvz3Y0AmQW517/djQMU98ffm2WNAJvm2BTCeY0BmZmZmZt5jQNjvLry3LGRAt9ScF4JBZEAWzn9Zq01kQET3rGt0TWRARD6eTFItZECKYqh5ve1jQKeWCK84MmRA84u3OmWAZEAJVFrahJZkQDEIrBxao2RASF0hYvmiZEDdjhWhvYBkQNR7z+1KPWRAAxd19wqGZEDz13W5EtRkQHYj4pyH62RATELY3wj5ZEBLw5VYfvhkQFyPwvUo1GRAOOXAYdiMZEBERxdA3dlkQPQjNDjAJ2VAyKKfX4pAZUBMLDqjt05lQGl51E4DTmVA249vSpQnZUCcTrLVZdxkQKDHg4ivLWVA9W/ytm17ZUAaIl0ijZVlQGZmZmZmpGVAbd9IRYijZUB04Oae/3plQOZn2UnzK2VA4fcl0YGBZUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8455"},"selection_policy":{"id":"8456"}},"id":"8419","type":"ColumnDataSource"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8450"},"major_label_policy":{"id":"8451"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8433"}},"id":"8432","type":"LinearAxis"},{"attributes":{"end":6},"id":"8426","type":"Range1d"},{"attributes":{},"id":"8454","type":"AllLabels"},{"attributes":{"axis":{"id":"8432"},"ticker":null,"visible":false},"id":"8435","type":"Grid"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8420","type":"LinearColorMapper"},{"attributes":{"end":6},"id":"8424","type":"Range1d"},{"attributes":{},"id":"8430","type":"LinearScale"},{"attributes":{},"id":"8433","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8420"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8444","type":"Rect"},{"attributes":{"below":[{"id":"8432"}],"center":[{"id":"8435"},{"id":"8439"}],"height":400,"left":[{"id":"8436"}],"renderers":[{"id":"8446"}],"title":{"id":"8422"},"toolbar":{"id":"8441"},"toolbar_location":null,"width":400,"x_range":{"id":"8424"},"x_scale":{"id":"8428"},"y_range":{"id":"8426"},"y_scale":{"id":"8430"}},"id":"8421","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8450","type":"BasicTickFormatter"}],"root_ids":["8421"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"69155b82-ba62-47bf-b562-fb23d0a4ec2e","root_ids":["8421"],"roots":{"8421":"12a2cd0f-5be3-4008-927e-57b419a2f4d4"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"6be532ff-a849-4d14-9724-4b54c4110b25":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8458"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8483","type":"Rect"},{"attributes":{"end":6},"id":"8464","type":"Range1d"},{"attributes":{"axis":{"id":"8470"},"ticker":null,"visible":false},"id":"8473","type":"Grid"},{"attributes":{},"id":"8493","type":"Selection"},{"attributes":{},"id":"8489","type":"AllLabels"},{"attributes":{"source":{"id":"8457"}},"id":"8485","type":"CDSView"},{"attributes":{},"id":"8494","type":"UnionRenderers"},{"attributes":{"end":6},"id":"8462","type":"Range1d"},{"attributes":{"axis":{"id":"8474"},"dimension":1,"ticker":null,"visible":false},"id":"8477","type":"Grid"},{"attributes":{},"id":"8491","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8457"},"glyph":{"id":"8482"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8483"},"view":{"id":"8485"}},"id":"8484","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"8478"}]},"id":"8479","type":"Toolbar"},{"attributes":{},"id":"8466","type":"LinearScale"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8458"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8482","type":"Rect"},{"attributes":{},"id":"8475","type":"BasicTicker"},{"attributes":{},"id":"8492","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8478","type":"HoverTool"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8458","type":"LinearColorMapper"},{"attributes":{},"id":"8471","type":"BasicTicker"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8491"},"major_label_policy":{"id":"8492"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8475"}},"id":"8474","type":"LinearAxis"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8488"},"major_label_policy":{"id":"8489"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8471"}},"id":"8470","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"s6SS8POWd0DeAgmKn6N3QD13J0QFxndALPzPUHLrd0DkwAaf4TR4QAnh0cYRV3hAIhbWMj6ueEDD9Shcj953QNejcD3K7HdAYrlKHF4ReEDTFWwjfjl4QOBfqdNGiHhAPujZrPqseECtNe+TPgp5QNJGv8cqJnhA0ETY8PQ1eECG+230tlx4QIdX7fWJh3hA6SYxCKzbeEB07+GS4wJ5QDlVCPU+ZnlA1W9wM8ZteEDJ5T+kH394QLhldswPqHhALXGJyJXVeEDz7bg8ES95QKn26XjMWHlAxXQhVj/CeUDkwAafYbV4QMKGp1dKyHhA3KeZpGjzeEDhsgqboSN5QO+MW3F2gnlA3/3xXrWueUBRlDq3Px56QOfptwr9/HhAuycPC3UReUAB6rx8wT55QIjMpm2tcXlA+FPjpdvVeUAUBfpEngR6QOrbOBhAenpA9jpOdphEeUC0yHa+n1p5QCUs4FQainlAL+ZCQLm/eUABG2vaQCl6QEoMAiuHWnpAdftReUDWekA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8493"},"selection_policy":{"id":"8494"}},"id":"8457","type":"ColumnDataSource"},{"attributes":{},"id":"8468","type":"LinearScale"},{"attributes":{},"id":"8488","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8470"}],"center":[{"id":"8473"},{"id":"8477"}],"height":400,"left":[{"id":"8474"}],"renderers":[{"id":"8484"}],"title":{"id":"8460"},"toolbar":{"id":"8479"},"toolbar_location":null,"width":400,"x_range":{"id":"8462"},"x_scale":{"id":"8466"},"y_range":{"id":"8464"},"y_scale":{"id":"8468"}},"id":"8459","subtype":"Figure","type":"Plot"},{"attributes":{"text":"Cleveland \\u2192 Toronto"},"id":"8460","type":"Title"}],"root_ids":["8459"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"6be532ff-a849-4d14-9724-4b54c4110b25","root_ids":["8459"],"roots":{"8459":"d07a9645-359a-4389-ac5a-ed5a6103e383"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"e117a6ff-0bbf-4035-bcb8-52c91c81a9c3":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8509","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8496"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8521","type":"Rect"},{"attributes":{},"id":"8531","type":"Selection"},{"attributes":{"source":{"id":"8495"}},"id":"8523","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8496"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8520","type":"Rect"},{"attributes":{},"id":"8532","type":"UnionRenderers"},{"attributes":{"end":6},"id":"8500","type":"Range1d"},{"attributes":{"below":[{"id":"8508"}],"center":[{"id":"8511"},{"id":"8515"}],"height":400,"left":[{"id":"8512"}],"renderers":[{"id":"8522"}],"title":{"id":"8498"},"toolbar":{"id":"8517"},"toolbar_location":null,"width":400,"x_range":{"id":"8500"},"x_scale":{"id":"8504"},"y_range":{"id":"8502"},"y_scale":{"id":"8506"}},"id":"8497","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"8495"},"glyph":{"id":"8520"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8521"},"view":{"id":"8523"}},"id":"8522","type":"GlyphRenderer"},{"attributes":{},"id":"8529","type":"BasicTickFormatter"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8496","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8526"},"major_label_policy":{"id":"8527"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8509"}},"id":"8508","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8529"},"major_label_policy":{"id":"8530"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8513"}},"id":"8512","type":"LinearAxis"},{"attributes":{"axis":{"id":"8508"},"ticker":null,"visible":false},"id":"8511","type":"Grid"},{"attributes":{},"id":"8530","type":"AllLabels"},{"attributes":{"axis":{"id":"8512"},"dimension":1,"ticker":null,"visible":false},"id":"8515","type":"Grid"},{"attributes":{},"id":"8513","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"aC27FiP9bEA5vxcVpwFtQJ5zAXkA6mxAh8Zu+k7FbEAjFjHscJdsQFF3r6QmIW1ApS+EnDfDbUDHSzeJQWxtQJu0BHQ6cW1AaYGHs+xXbUDsz4/QYDBtQNF0G3mF/2xAsXVfhF+TbUB1i2Wf7EBuQCVqs/tf221A/Knx0s3gbUAaP0Pu2MVtQFHZsKZym21Af9MFBppnbUCuGjosgwVuQCqXfKKhvm5AwaikTkA9bkBdn94xYVBuQAx+0dThM25A0TKcfIQGbkAtMvCSrs9tQKu/FNSmd25A+vJdpVY8b0CxoqsZvqtuQEwsOqM3sG5A2VoEawGibkA2PL1SlnFuQMBAECDDN25AwrS5e8rpbkCw/nSoC7pvQLvsfOQ7Gm9AvpTLkPQeb0C/hwEBIRBvQJtF3iio3G5Abp/6rNefbkC/WZQj7ltvQEAtq1XgG3BAquaDr7mIb0Ax/Vx+sY1vQIxkNJdAfm9AG5/J/rlHb0Ac/uQ57AdvQNZOOcsRzm9AGrM217pacEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8531"},"selection_policy":{"id":"8532"}},"id":"8495","type":"ColumnDataSource"},{"attributes":{},"id":"8526","type":"BasicTickFormatter"},{"attributes":{"text":"Cleveland \\u2192 Windsor"},"id":"8498","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8516","type":"HoverTool"},{"attributes":{},"id":"8504","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"8516"}]},"id":"8517","type":"Toolbar"},{"attributes":{},"id":"8527","type":"AllLabels"},{"attributes":{"end":6},"id":"8502","type":"Range1d"},{"attributes":{},"id":"8506","type":"LinearScale"}],"root_ids":["8497"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"e117a6ff-0bbf-4035-bcb8-52c91c81a9c3","root_ids":["8497"],"roots":{"8497":"d635d8d0-fe79-4526-b4a4-6124b0b43de5"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"61a0e804-70a8-4bef-8c37-421cfe3f51cc":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"8533"},"glyph":{"id":"8558"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8559"},"view":{"id":"8561"}},"id":"8560","type":"GlyphRenderer"},{"attributes":{},"id":"8569","type":"Selection"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8534"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8558","type":"Rect"},{"attributes":{"below":[{"id":"8546"}],"center":[{"id":"8549"},{"id":"8553"}],"height":400,"left":[{"id":"8550"}],"renderers":[{"id":"8560"}],"title":{"id":"8536"},"toolbar":{"id":"8555"},"toolbar_location":null,"width":400,"x_range":{"id":"8538"},"x_scale":{"id":"8542"},"y_range":{"id":"8540"},"y_scale":{"id":"8544"}},"id":"8535","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"8538","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8534","type":"LinearColorMapper"},{"attributes":{},"id":"8568","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8564"},"major_label_policy":{"id":"8565"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8547"}},"id":"8546","type":"LinearAxis"},{"attributes":{},"id":"8570","type":"UnionRenderers"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8567"},"major_label_policy":{"id":"8568"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8551"}},"id":"8550","type":"LinearAxis"},{"attributes":{"axis":{"id":"8546"},"ticker":null,"visible":false},"id":"8549","type":"Grid"},{"attributes":{"axis":{"id":"8550"},"dimension":1,"ticker":null,"visible":false},"id":"8553","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8534"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8559","type":"Rect"},{"attributes":{},"id":"8551","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"n6I05VRJdkCcRM4MLEh2QOXl+ogJSHZARmv7DSlTdkCQ5+kSxDh2QICMb94OYnZAW7yz0VSVdkCgLMYK6JR2QLhzBuukk3ZAmEBbGFOTdkCyGZb1EZ92QPRC8K7JgnZArb8lAB+vdkAf5oF+9eV2QGoxeJhW63ZA4MojyR3fdkBMm7unnN52QBKgS9366nZASnYRS8/MdkDoGsEhL/x2QPA3NSuWNndAObNdoY83d0D8+Vunlip3QAD2GzfmKXdAfk7mxOM2d0CgqTLn1BZ3QBVOd0M/SXdAtGED2DaHd0D8DF6qyIN3QBcplIUPdndAs1B8xi91d0Dr/ICszIJ3QAQFOYPaYHdAQ4EtZU+Wd0B4i9GE19d3QMNEKFvpz3dAQICxY4jBd0Bag/dVecB3QEqDNpS1zndAWzhaH+Cqd0B93MiGX+N3QD21nzF4KHhA6MKj6PwbeEBcr+lBAQ14QA3eV+XCC3hAtjHRe54aeECxa3u75fR3QKsPf6hvMHhADgdT3hh5eEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8569"},"selection_policy":{"id":"8570"}},"id":"8533","type":"ColumnDataSource"},{"attributes":{},"id":"8565","type":"AllLabels"},{"attributes":{},"id":"8564","type":"BasicTickFormatter"},{"attributes":{"text":"Detroit \\u2192 Chicago"},"id":"8536","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8554","type":"HoverTool"},{"attributes":{},"id":"8542","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"8554"}]},"id":"8555","type":"Toolbar"},{"attributes":{},"id":"8567","type":"BasicTickFormatter"},{"attributes":{"end":6},"id":"8540","type":"Range1d"},{"attributes":{"source":{"id":"8533"}},"id":"8561","type":"CDSView"},{"attributes":{},"id":"8544","type":"LinearScale"},{"attributes":{},"id":"8547","type":"BasicTicker"}],"root_ids":["8535"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"61a0e804-70a8-4bef-8c37-421cfe3f51cc","root_ids":["8535"],"roots":{"8535":"01d29cc5-3d99-4c8c-9d98-385341238af7"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"f1984a8e-1a1c-440f-aa50-bd545018a5fd":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"field":"val","transform":{"id":"8572"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8596","type":"Rect"},{"attributes":{"below":[{"id":"8584"}],"center":[{"id":"8587"},{"id":"8591"}],"height":400,"left":[{"id":"8588"}],"renderers":[{"id":"8598"}],"title":{"id":"8574"},"toolbar":{"id":"8593"},"toolbar_location":null,"width":400,"x_range":{"id":"8576"},"x_scale":{"id":"8580"},"y_range":{"id":"8578"},"y_scale":{"id":"8582"}},"id":"8573","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8572","type":"LinearColorMapper"},{"attributes":{},"id":"8608","type":"UnionRenderers"},{"attributes":{"end":6},"id":"8576","type":"Range1d"},{"attributes":{},"id":"8605","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8602"},"major_label_policy":{"id":"8603"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8585"}},"id":"8584","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8605"},"major_label_policy":{"id":"8606"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8589"}},"id":"8588","type":"LinearAxis"},{"attributes":{"axis":{"id":"8584"},"ticker":null,"visible":false},"id":"8587","type":"Grid"},{"attributes":{},"id":"8602","type":"BasicTickFormatter"},{"attributes":{},"id":"8607","type":"Selection"},{"attributes":{"data":{"val":{"__ndarray__":"oBov3SR6bEAjpTT2gHJsQFcyEYBJeGxAGW/QA0R5bEClLEMc64NsQA/QfTnzdmxA63pYXiiVbECRK/UsyOhsQElYZfDB6WxAA0jIm9fmbEBqB22D5OdsQDm0yHY+82xAGR9mL1vlbEAfjI6a5QVtQII8u3xrV21A8sf+w2dYbUDa4Ok6uUptQLyfCQOFVm1AzTtO0ZFibUA9vhglw1NtQFOdxNaidm1Ack2BzA7GbUC1h2KXDcdtQF/B7FSvuG1ADjimgiXFbUBhw9Mr5dFtQEYNARsrwm1Ah676EmDnbUB+rhEcsjRuQHhHxmqzNW5A//G5bqUmbkBEgHgCxjNuQPVKWYY4QW5AUFzpEJMwbkC7vzBPHVhuQG+/12tVo25AOwcqPlmkbkCE0ryIm5RuQJYYFYJmom5AidLe4IuwbkBZq9EG+55uQO/QZovayG5AYNCdu/gRb0DjdsMR/xJvQAmzv6KRAm9A6LCxAQcRb0AdWmQ73x9vQH1KhPxiDW9AI+Kcx5c5b0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8607"},"selection_policy":{"id":"8608"}},"id":"8571","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"8588"},"dimension":1,"ticker":null,"visible":false},"id":"8591","type":"Grid"},{"attributes":{},"id":"8589","type":"BasicTicker"},{"attributes":{},"id":"8603","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8572"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8597","type":"Rect"},{"attributes":{"text":"Detroit \\u2192 Cleveland"},"id":"8574","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8592","type":"HoverTool"},{"attributes":{},"id":"8580","type":"LinearScale"},{"attributes":{"source":{"id":"8571"}},"id":"8599","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8592"}]},"id":"8593","type":"Toolbar"},{"attributes":{"end":6},"id":"8578","type":"Range1d"},{"attributes":{"data_source":{"id":"8571"},"glyph":{"id":"8596"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8597"},"view":{"id":"8599"}},"id":"8598","type":"GlyphRenderer"},{"attributes":{},"id":"8606","type":"AllLabels"},{"attributes":{},"id":"8582","type":"LinearScale"},{"attributes":{},"id":"8585","type":"BasicTicker"}],"root_ids":["8573"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"f1984a8e-1a1c-440f-aa50-bd545018a5fd","root_ids":["8573"],"roots":{"8573":"83de1e8a-70e7-4f4f-8b43-b07210377c9e"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"893789f8-c1e2-48f1-b946-089e3901fa7d":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8646","type":"UnionRenderers"},{"attributes":{},"id":"8620","type":"LinearScale"},{"attributes":{"data":{"val":{"__ndarray__":"g3I2eMori0B8AJwoEy2LQK32sBfqPotA24r9ZfdTi0BheUYRSGeLQI+f1+mxaYtATZakfIKKi0AwvsNIaneLQDZ+lwjqeItAvpcMERGMi0CCYa9mo6KLQAnekEY1t4tAZmZmZua5i0BZ/RGG4dyLQOWdQxkKw4tA94+F6MDEi0DOOGgKONmLQEKrOHpB8YtAsULbeyIHjEA+LfXiGgqMQF3QjI9AL4xARmSzfs4OjECyDYHIlxCMQN/ZwwNfJoxA6qdJOsQ/jEBTEzOxD1eMQBb0g19PWoxAYqMHmZ+BjEDIowo1qVqMQGyLfKhuXIxA8Hof/YVzjEDQ1VbsL46MQPt3feb8poxA7roS3IOqjEBuCnWi/tOMQErjYeuDpoxALZ1qiEWojEAAHHv2rMCMQLYDZJ6b3IxAo9zHG+r2jEDFgaFYuPqMQHPd76tdJo1AzCK5oV7yjEB3Tg763QqNQBG91u/TDY1AnDFxUAcrjUBLQRJR10aNQJ1IMNXsSo1AeLBqtbx4jUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8645"},"selection_policy":{"id":"8646"}},"id":"8609","type":"ColumnDataSource"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8640"},"major_label_policy":{"id":"8641"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8623"}},"id":"8622","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8610","type":"LinearColorMapper"},{"attributes":{},"id":"8644","type":"AllLabels"},{"attributes":{"axis":{"id":"8622"},"ticker":null,"visible":false},"id":"8625","type":"Grid"},{"attributes":{"end":6},"id":"8614","type":"Range1d"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8643"},"major_label_policy":{"id":"8644"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8627"}},"id":"8626","type":"LinearAxis"},{"attributes":{},"id":"8623","type":"BasicTicker"},{"attributes":{},"id":"8640","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8626"},"dimension":1,"ticker":null,"visible":false},"id":"8629","type":"Grid"},{"attributes":{},"id":"8627","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8610"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8635","type":"Rect"},{"attributes":{},"id":"8641","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8630","type":"HoverTool"},{"attributes":{"source":{"id":"8609"}},"id":"8637","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8630"}]},"id":"8631","type":"Toolbar"},{"attributes":{"below":[{"id":"8622"}],"center":[{"id":"8625"},{"id":"8629"}],"height":400,"left":[{"id":"8626"}],"renderers":[{"id":"8636"}],"title":{"id":"8612"},"toolbar":{"id":"8631"},"toolbar_location":null,"width":400,"x_range":{"id":"8614"},"x_scale":{"id":"8618"},"y_range":{"id":"8616"},"y_scale":{"id":"8620"}},"id":"8611","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"8616","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8610"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8634","type":"Rect"},{"attributes":{},"id":"8645","type":"Selection"},{"attributes":{},"id":"8618","type":"LinearScale"},{"attributes":{},"id":"8643","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8609"},"glyph":{"id":"8634"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8635"},"view":{"id":"8637"}},"id":"8636","type":"GlyphRenderer"},{"attributes":{"text":"Detroit \\u2192 Duluth"},"id":"8612","type":"Title"}],"root_ids":["8611"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"893789f8-c1e2-48f1-b946-089e3901fa7d","root_ids":["8611"],"roots":{"8611":"5d9dcecb-924a-4337-9448-d56b63e8464f"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"820333ac-141d-43f3-9c62-b7ddce53fa17":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8684","type":"UnionRenderers"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8678"},"major_label_policy":{"id":"8679"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8661"}},"id":"8660","type":"LinearAxis"},{"attributes":{},"id":"8683","type":"Selection"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8681"},"major_label_policy":{"id":"8682"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8665"}},"id":"8664","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8648"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8672","type":"Rect"},{"attributes":{"axis":{"id":"8660"},"ticker":null,"visible":false},"id":"8663","type":"Grid"},{"attributes":{},"id":"8678","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8664"},"dimension":1,"ticker":null,"visible":false},"id":"8667","type":"Grid"},{"attributes":{},"id":"8665","type":"BasicTicker"},{"attributes":{},"id":"8679","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8648"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8673","type":"Rect"},{"attributes":{"text":"Detroit \\u2192 Hamilton"},"id":"8650","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8668","type":"HoverTool"},{"attributes":{},"id":"8656","type":"LinearScale"},{"attributes":{"source":{"id":"8647"}},"id":"8675","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8668"}]},"id":"8669","type":"Toolbar"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8648","type":"LinearColorMapper"},{"attributes":{"below":[{"id":"8660"}],"center":[{"id":"8663"},{"id":"8667"}],"height":400,"left":[{"id":"8664"}],"renderers":[{"id":"8674"}],"title":{"id":"8650"},"toolbar":{"id":"8669"},"toolbar_location":null,"width":400,"x_range":{"id":"8652"},"x_scale":{"id":"8656"},"y_range":{"id":"8654"},"y_scale":{"id":"8658"}},"id":"8649","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"val":{"__ndarray__":"I7WavxN3cEC80/jgMHZwQKnedZGdhnBAzyrY68KCcEAxAQnUrGlwQMyMyME2nXBAwaCWMKTzcED2KFyPArNwQKAaL90kw3BALKaIwr3CcEBTRUzkfb5wQEa9lkbCo3BAfGRz1RzbcEAeMuVD8DdxQMmcHV/x7nBATGmidG7/cECiRbbz3f5wQNdfwNw4+nBAaaEJudfdcEA5ZAPpAhlxQG+bTlc8fHFAqjjELuAqcUAG4PoLuDtxQBfl4yT+OnFAaKIZ1fM1cUCNhXwr7RdxQOg7rvzoVnFAvwS4aojAcUB9rIX+zmZxQLIubqMBeHFAjYQRVh53cUDtvI3NrnFxQLBp750CUnFApTs+EM+UcUAclgZ+1ARyQFAgR869onFAXn3hOku0cUAQTCSHPrNxQH7/5sVprXFA001iEBiMcUBUE+kjtdJxQGz/b5EgSXJAsN+4MYLecUAY9DnSlPBxQIXrUbhe73FAAhpbviTpcUD2MdWCLcZxQBETeTebEHJAvWjZpGyNckA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8683"},"selection_policy":{"id":"8684"}},"id":"8647","type":"ColumnDataSource"},{"attributes":{"end":6},"id":"8654","type":"Range1d"},{"attributes":{},"id":"8658","type":"LinearScale"},{"attributes":{},"id":"8681","type":"BasicTickFormatter"},{"attributes":{},"id":"8661","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8647"},"glyph":{"id":"8672"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8673"},"view":{"id":"8675"}},"id":"8674","type":"GlyphRenderer"},{"attributes":{},"id":"8682","type":"AllLabels"},{"attributes":{"end":6},"id":"8652","type":"Range1d"}],"root_ids":["8649"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"820333ac-141d-43f3-9c62-b7ddce53fa17","root_ids":["8649"],"roots":{"8649":"166cd85c-24c2-4cd1-b08b-9b6915c5ef38"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"f868549b-09a4-4da5-8dce-01fb675f9c0d":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8719"},"major_label_policy":{"id":"8720"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8703"}},"id":"8702","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"o0bXOxIYfUBsXtVZbQF9QE65wru8+3xA8ueAyRL8fECcM6K0F/R8QPV6QVWWFH1AHfv+clIzfUBY214chnh9QFzQ1hw7YH1A6qdJOlRafUA8+rpn2Fp9QChJMgZRUn1AjJJGu0B1fUD1E85uTZZ9QP9HAf352H1APhrz3wi/fUAP2DCevKt9QLYQ5KCEuX1AwoanV4qwfUAiqksh69V9QMwsnWpI+X1As9yI3W05fkAujPSi1h1+QExh7w+FCX5AMCcN2jAYfkBOnDepww5+QLnBUIeVNn5Ao0VsZkNcfkBncRC+4Zl+QBHWEGakfH5AieqtgU1nfkAnne12QmZ+QOjZrPr8bH5AXgE77T+XfkCIhiBiPr9+QJ0tILRe+n5ArgbNU4LbfkC5S4fzFcV+QLJLVG8NxH5Ade88TDbLfkD1GEBT6vd+QGCf7105In9ALCridPJaf0DTsv9LYzp/QPbURWXeIn9APPq6Z9ghf0AOLbKdbyl/QIwwRbmUWH9AN7i+WTSFf0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8721"},"selection_policy":{"id":"8722"}},"id":"8685","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"8702"},"dimension":1,"ticker":null,"visible":false},"id":"8705","type":"Grid"},{"attributes":{},"id":"8716","type":"BasicTickFormatter"},{"attributes":{},"id":"8703","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8686"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8711","type":"Rect"},{"attributes":{},"id":"8717","type":"AllLabels"},{"attributes":{},"id":"8721","type":"Selection"},{"attributes":{"text":"Detroit \\u2192 Milwaukee"},"id":"8688","type":"Title"},{"attributes":{},"id":"8694","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8706","type":"HoverTool"},{"attributes":{"source":{"id":"8685"}},"id":"8713","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8706"}]},"id":"8707","type":"Toolbar"},{"attributes":{"end":6},"id":"8692","type":"Range1d"},{"attributes":{},"id":"8722","type":"UnionRenderers"},{"attributes":{},"id":"8696","type":"LinearScale"},{"attributes":{"axis":{"id":"8698"},"ticker":null,"visible":false},"id":"8701","type":"Grid"},{"attributes":{},"id":"8719","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8685"},"glyph":{"id":"8710"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8711"},"view":{"id":"8713"}},"id":"8712","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8686"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8710","type":"Rect"},{"attributes":{"end":6},"id":"8690","type":"Range1d"},{"attributes":{"below":[{"id":"8698"}],"center":[{"id":"8701"},{"id":"8705"}],"height":400,"left":[{"id":"8702"}],"renderers":[{"id":"8712"}],"title":{"id":"8688"},"toolbar":{"id":"8707"},"toolbar_location":null,"width":400,"x_range":{"id":"8690"},"x_scale":{"id":"8694"},"y_range":{"id":"8692"},"y_scale":{"id":"8696"}},"id":"8687","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8699","type":"BasicTicker"},{"attributes":{},"id":"8720","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8686","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8716"},"major_label_policy":{"id":"8717"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8699"}},"id":"8698","type":"LinearAxis"}],"root_ids":["8687"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"f868549b-09a4-4da5-8dce-01fb675f9c0d","root_ids":["8687"],"roots":{"8687":"250397b2-56a5-409a-b02c-72d8cc8548a0"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"56c3cde8-34df-4895-88f3-ca81caf240c3":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"8728","type":"Range1d"},{"attributes":{},"id":"8737","type":"BasicTicker"},{"attributes":{},"id":"8754","type":"BasicTickFormatter"},{"attributes":{"end":6},"id":"8730","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8744","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8724"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8749","type":"Rect"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8754"},"major_label_policy":{"id":"8755"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8737"}},"id":"8736","type":"LinearAxis"},{"attributes":{},"id":"8755","type":"AllLabels"},{"attributes":{},"id":"8759","type":"Selection"},{"attributes":{"data":{"val":{"__ndarray__":"/+bFiX+9hUDC+6pcWMaFQNieWRIQu4VAaV3+npOqhUCmWrD5nZ+FQN6nTxderIVAGGO71sm7hUBYzc79sAyGQEaaeAeoC4ZAQRWSJ7T/hUBO8n436PmFQDHsMCZt4oVAUPrnDqfvhUBJ2o0+9v+FQFkyx/JOXIZAXYzcLs9QhkCqi8o8WESGQLn/yHQIPoZAwxGkUjwlhkC7uI0G8DKGQHlRYKYiRIZA67tshQqihkBv6k1W9pWGQAxuEFL8iIZAHHkgsiiChkBNoyR/C2iGQCZ3M/44doZAozRADk+IhkCE2QQYxueGQIBIv30d24ZAdeRIZ6DNhkCHhmrvSMaGQNg0pavaqoZAmMnL9YG5hkDUqxJ2e8yGQBz3nKqBLYdAkaYwpUQgh0DYxo58RBKHQPGTtCxpCodAY8Yl2KnthkADiHHtyvyGQAUj5d2nEIdADI43ngR/h0CiBKLMa2WHQOEUDJ09ZYdAVA0MaolOh0DuV6YEeTCHQG5GF+UTQIdANpq3RdRUh0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8759"},"selection_policy":{"id":"8760"}},"id":"8723","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8723"}},"id":"8751","type":"CDSView"},{"attributes":{},"id":"8760","type":"UnionRenderers"},{"attributes":{"text":"Detroit \\u2192 Montreal"},"id":"8726","type":"Title"},{"attributes":{"active_multi":null,"tools":[{"id":"8744"}]},"id":"8745","type":"Toolbar"},{"attributes":{},"id":"8757","type":"BasicTickFormatter"},{"attributes":{},"id":"8732","type":"LinearScale"},{"attributes":{"data_source":{"id":"8723"},"glyph":{"id":"8748"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8749"},"view":{"id":"8751"}},"id":"8750","type":"GlyphRenderer"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8757"},"major_label_policy":{"id":"8758"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8741"}},"id":"8740","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8724"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8748","type":"Rect"},{"attributes":{},"id":"8758","type":"AllLabels"},{"attributes":{"below":[{"id":"8736"}],"center":[{"id":"8739"},{"id":"8743"}],"height":400,"left":[{"id":"8740"}],"renderers":[{"id":"8750"}],"title":{"id":"8726"},"toolbar":{"id":"8745"},"toolbar_location":null,"width":400,"x_range":{"id":"8728"},"x_scale":{"id":"8732"},"y_range":{"id":"8730"},"y_scale":{"id":"8734"}},"id":"8725","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"8740"},"dimension":1,"ticker":null,"visible":false},"id":"8743","type":"Grid"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8724","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"8736"},"ticker":null,"visible":false},"id":"8739","type":"Grid"},{"attributes":{},"id":"8741","type":"BasicTicker"},{"attributes":{},"id":"8734","type":"LinearScale"}],"root_ids":["8725"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"56c3cde8-34df-4895-88f3-ca81caf240c3","root_ids":["8725"],"roots":{"8725":"4f2485d1-c6a0-4098-9807-a214739be380"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"83652e61-3e0a-4eea-9f90-da7f9d15c028":{"defs":[],"roots":{"references":[{"attributes":{},"id":"8792","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8762"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8787","type":"Rect"},{"attributes":{},"id":"8770","type":"LinearScale"},{"attributes":{"text":"Detroit \\u2192 Thunder Bay"},"id":"8764","type":"Title"},{"attributes":{"end":6},"id":"8768","type":"Range1d"},{"attributes":{},"id":"8793","type":"AllLabels"},{"attributes":{},"id":"8797","type":"Selection"},{"attributes":{},"id":"8772","type":"LinearScale"},{"attributes":{"source":{"id":"8761"}},"id":"8789","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8762"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8786","type":"Rect"},{"attributes":{},"id":"8798","type":"UnionRenderers"},{"attributes":{"below":[{"id":"8774"}],"center":[{"id":"8777"},{"id":"8781"}],"height":400,"left":[{"id":"8778"}],"renderers":[{"id":"8788"}],"title":{"id":"8764"},"toolbar":{"id":"8783"},"toolbar_location":null,"width":400,"x_range":{"id":"8766"},"x_scale":{"id":"8770"},"y_range":{"id":"8768"},"y_scale":{"id":"8772"}},"id":"8763","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"8766","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8762","type":"LinearColorMapper"},{"attributes":{},"id":"8795","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8761"},"glyph":{"id":"8786"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8787"},"view":{"id":"8789"}},"id":"8788","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"8778"},"dimension":1,"ticker":null,"visible":false},"id":"8781","type":"Grid"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8792"},"major_label_policy":{"id":"8793"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8775"}},"id":"8774","type":"LinearAxis"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8782","type":"HoverTool"},{"attributes":{},"id":"8779","type":"BasicTicker"},{"attributes":{},"id":"8796","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"8782"}]},"id":"8783","type":"Toolbar"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8795"},"major_label_policy":{"id":"8796"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8779"}},"id":"8778","type":"LinearAxis"},{"attributes":{"axis":{"id":"8774"},"ticker":null,"visible":false},"id":"8777","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"d2v0xWkzjUCgLCHE+keNQEOtad4xGI1AAdR5+YIDjUAKGLiXz++MQO9vdaVaCo1AjSjtDb47jUAHMBtTBo6NQCT+cnf3o41AXI/C9ShxjUBMP5dfLFuNQMrG3uZYRo1AcNP6tltijUBVwaikzpaNQJBgT+Ci6I1AqM/EKvT/jUBhw9MrZcqNQJeqtMXVso1AkQn4NeKcjUDyNoDIXLqNQB1aZDvf8Y1AGpGDbT9DjkAsoRbe8FuOQGb35GGhI45A6anEK38KjkBSuB6Fa/ONQG0GE9pdEo5A5fIf0u9MjkCjwbf6252OQLByaJHtt45Aayv2l918jkDzT7o+PWKOQBJnRdT0SY5A72mY615qjkCsi9toAKiOQDOG3od4+I5ANES6ROoTj0BwXwfOGdaOQHGqWnc4uo5A2qleI36gjkBqOSv9X8KOQHQkl/8QA49Aw0oFFRVTj0Cr7Sb45m+PQHWTGARWL49A6HAIsDMSj0CaWIVyB/eOQOucsA5hGo9APL1SliFej0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8797"},"selection_policy":{"id":"8798"}},"id":"8761","type":"ColumnDataSource"},{"attributes":{},"id":"8775","type":"BasicTicker"}],"root_ids":["8763"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"83652e61-3e0a-4eea-9f90-da7f9d15c028","root_ids":["8763"],"roots":{"8763":"976fabfa-ad0d-43d1-8c02-9f699695e0c5"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"2c02d9e4-5590-4fc7-8b0a-a99968981350":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8800"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8825","type":"Rect"},{"attributes":{},"id":"8831","type":"AllLabels"},{"attributes":{"end":6},"id":"8806","type":"Range1d"},{"attributes":{},"id":"8835","type":"Selection"},{"attributes":{},"id":"8810","type":"LinearScale"},{"attributes":{},"id":"8813","type":"BasicTicker"},{"attributes":{},"id":"8836","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8800"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8824","type":"Rect"},{"attributes":{"end":6},"id":"8804","type":"Range1d"},{"attributes":{},"id":"8833","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8812"}],"center":[{"id":"8815"},{"id":"8819"}],"height":400,"left":[{"id":"8816"}],"renderers":[{"id":"8826"}],"title":{"id":"8802"},"toolbar":{"id":"8821"},"toolbar_location":null,"width":400,"x_range":{"id":"8804"},"x_scale":{"id":"8808"},"y_range":{"id":"8806"},"y_scale":{"id":"8810"}},"id":"8801","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"8799"},"glyph":{"id":"8824"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8825"},"view":{"id":"8827"}},"id":"8826","type":"GlyphRenderer"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8800","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8830"},"major_label_policy":{"id":"8831"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8813"}},"id":"8812","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8833"},"major_label_policy":{"id":"8834"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8817"}},"id":"8816","type":"LinearAxis"},{"attributes":{"axis":{"id":"8812"},"ticker":null,"visible":false},"id":"8815","type":"Grid"},{"attributes":{},"id":"8834","type":"AllLabels"},{"attributes":{"axis":{"id":"8816"},"dimension":1,"ticker":null,"visible":false},"id":"8819","type":"Grid"},{"attributes":{},"id":"8817","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"8820"}]},"id":"8821","type":"Toolbar"},{"attributes":{"source":{"id":"8799"}},"id":"8827","type":"CDSView"},{"attributes":{"data":{"val":{"__ndarray__":"SjEXI5gQV0C+nxov3UZXQL6fGi/dRldA22OvmE3nVkDbY6+YTedWQBfZzvdTi1ZA0wxO6cXXWEBFkd4FxIpXQArXo3A9xVdACtejcD3FV0CYrKMNdF5XQJisow10XldAz/dT46X7VkByObk6W3JZQHk0m+jvBFhAVg4tsp1DWEBWDi2ynUNYQByyooKa1VdAHLKigprVV0CHFtnO92tXQCy27ovwDFpArddXyxt/WECiRbbz/cFYQKJFtvP9wVhA2fqW98BMWEDZ+pb3wExYQD81XrpJ3FdAsJKP3YWnWkDhehSuR/lYQO58PzVeQFlA7nw/NV5AWUCWQ4ts58NYQJZDi2znw1hA+FPjpZtMWEBpD8UuG0JbQGxU8ZBzc1lAObTIdr6+WUA5tMh2vr5ZQMMSauENO1lAwxJq4Q07WUCwcmiR7bxYQCOM+n+w3FtAK85ic5/tWUCF61G4Hj1aQIXrUbgePVpA8eFIVjSyWUDx4UhWNLJZQGiR7Xw/LVlAp2ib0UV3XEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8835"},"selection_policy":{"id":"8836"}},"id":"8799","type":"ColumnDataSource"},{"attributes":{},"id":"8830","type":"BasicTickFormatter"},{"attributes":{"text":"Detroit \\u2192 Toledo"},"id":"8802","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8820","type":"HoverTool"},{"attributes":{},"id":"8808","type":"LinearScale"}],"root_ids":["8801"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"2c02d9e4-5590-4fc7-8b0a-a99968981350","root_ids":["8801"],"roots":{"8801":"135e8091-0673-4e9c-9a1a-85aaa73f56c5"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"e53b4db2-9d6e-4d59-aeb5-de2858e326e9":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"field":"val","transform":{"id":"8838"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8862","type":"Rect"},{"attributes":{},"id":"8872","type":"AllLabels"},{"attributes":{},"id":"8851","type":"BasicTicker"},{"attributes":{},"id":"8868","type":"BasicTickFormatter"},{"attributes":{},"id":"8848","type":"LinearScale"},{"attributes":{"data_source":{"id":"8837"},"glyph":{"id":"8862"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8863"},"view":{"id":"8865"}},"id":"8864","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"8850"}],"center":[{"id":"8853"},{"id":"8857"}],"height":400,"left":[{"id":"8854"}],"renderers":[{"id":"8864"}],"title":{"id":"8840"},"toolbar":{"id":"8859"},"toolbar_location":null,"width":400,"x_range":{"id":"8842"},"x_scale":{"id":"8846"},"y_range":{"id":"8844"},"y_scale":{"id":"8848"}},"id":"8839","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"8842","type":"Range1d"},{"attributes":{},"id":"8846","type":"LinearScale"},{"attributes":{"end":6},"id":"8844","type":"Range1d"},{"attributes":{},"id":"8873","type":"Selection"},{"attributes":{},"id":"8869","type":"AllLabels"},{"attributes":{},"id":"8871","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8868"},"major_label_policy":{"id":"8869"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8851"}},"id":"8850","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8871"},"major_label_policy":{"id":"8872"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8855"}},"id":"8854","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8838","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"8850"},"ticker":null,"visible":false},"id":"8853","type":"Grid"},{"attributes":{"text":"Detroit \\u2192 Toronto"},"id":"8840","type":"Title"},{"attributes":{},"id":"8874","type":"UnionRenderers"},{"attributes":{"data":{"val":{"__ndarray__":"T3IslFE2c0DAjM6ekFNzQGTOjq/4jHNAPDvPjoquc0AwHL47KPFzQOAFWzakNHRADsBh/VqLdEDsUbgexWxzQB+7C5T0i3NAQhn072TJc0A9CtejcO1zQA0skVXbNHRAV4PmKUF9dEBz1eGNEdp0QIgxRKk4o3NAcMFjiVjEc0AtjD4w0QV0QD/Z3rhWLHRAovIKn4h4dEDOAHId3sV0QNfqYR7IKHVAGOnqM6zZc0DP76B+vPxzQArXo3A9QnRAQKjmzTxrdEAqkZ/oNbx0QEZ+/RB7DnVALdj8rn53dUC0yHa+HxB0QCH2+HMgNXRA6CEJsal+dEBBd+7iIqp0QMBXGTLj/3RAyiNuBBhXdUCR7Xw/NcZ1QFGoAkmTRnRAfyQ2aYRtdEDTlFPxFbt0QDUeEfgI6XRASPate5BDdUBBofn3tJ91QPUC/c/rFHZA4F+p0wZ9dEDRKo5e6KV0QLDfuDGC93RAN+0YDe8ndUDdvCfFPYd1QLgehetR6HVATPCXYKJjdkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8873"},"selection_policy":{"id":"8874"}},"id":"8837","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"8854"},"dimension":1,"ticker":null,"visible":false},"id":"8857","type":"Grid"},{"attributes":{},"id":"8855","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8838"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8863","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8858","type":"HoverTool"},{"attributes":{"source":{"id":"8837"}},"id":"8865","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8858"}]},"id":"8859","type":"Toolbar"}],"root_ids":["8839"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"e53b4db2-9d6e-4d59-aeb5-de2858e326e9","root_ids":["8839"],"roots":{"8839":"bd3dac02-842d-4fb5-af97-da7eac8b2014"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"f6c94c91-c5df-4cd7-8856-9d31a0973df4":{"defs":[],"roots":{"references":[{"attributes":{"text":"Detroit \\u2192 Windsor"},"id":"8878","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8896","type":"HoverTool"},{"attributes":{},"id":"8884","type":"LinearScale"},{"attributes":{"source":{"id":"8875"}},"id":"8903","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8896"}]},"id":"8897","type":"Toolbar"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8876"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8900","type":"Rect"},{"attributes":{"end":6},"id":"8882","type":"Range1d"},{"attributes":{"below":[{"id":"8888"}],"center":[{"id":"8891"},{"id":"8895"}],"height":400,"left":[{"id":"8892"}],"renderers":[{"id":"8902"}],"title":{"id":"8878"},"toolbar":{"id":"8897"},"toolbar_location":null,"width":400,"x_range":{"id":"8880"},"x_scale":{"id":"8884"},"y_range":{"id":"8882"},"y_scale":{"id":"8886"}},"id":"8877","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8911","type":"Selection"},{"attributes":{},"id":"8886","type":"LinearScale"},{"attributes":{},"id":"8909","type":"BasicTickFormatter"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8876","type":"LinearColorMapper"},{"attributes":{},"id":"8889","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8875"},"glyph":{"id":"8900"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8901"},"view":{"id":"8903"}},"id":"8902","type":"GlyphRenderer"},{"attributes":{},"id":"8912","type":"UnionRenderers"},{"attributes":{"end":6},"id":"8880","type":"Range1d"},{"attributes":{},"id":"8910","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8906"},"major_label_policy":{"id":"8907"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8889"}},"id":"8888","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8909"},"major_label_policy":{"id":"8910"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8893"}},"id":"8892","type":"LinearAxis"},{"attributes":{"axis":{"id":"8888"},"ticker":null,"visible":false},"id":"8891","type":"Grid"},{"attributes":{},"id":"8906","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"g3agsSMyQUBzaJHtfANBQHNoke18A0FAIVg0IdZHQUAhWDQh1kdBQI0o7Q2+aEZAnruX2tbiSkDzaDbR3zlCQArXo3A9CEJACtejcD0IQkDCGiW3P1BCQMIaJbc/UEJAPzVeuknIR0Ddch7jRJJMQGNbzPCbQUNAokW28/0MQ0CiRbbz/QxDQPFWK02pWENA8VYrTalYQ0DyQc9m1SdJQKqjuuuyQU5A001iEFhJREA5tMh2vhFEQDm0yHa+EURAkRkc4xJhRECRGRzjEmFEQKVOQBNhh0pA6VpB9CDxT0BDQPgvFFFFQNEi2/l+FkVA0SLb+X4WRUAx3Ax5fGlFQDHcDHl8aUVAV1uxv+zmS0DbxW5+R9BQQLMyjk/QWEZAaJHtfD8bRkBoke18PxtGQNKe/Q7mcUZA0p79DuZxRkAKaCJseEZNQHshsoL+p1FAIyUkb4xgR0AAAAAAACBHQAAAAAAAIEdAAdsDpU96R0AB2wOlT3pHQLx0kxgEpk5A4jkAh7V/UkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8911"},"selection_policy":{"id":"8912"}},"id":"8875","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"8892"},"dimension":1,"ticker":null,"visible":false},"id":"8895","type":"Grid"},{"attributes":{},"id":"8893","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8876"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8901","type":"Rect"},{"attributes":{},"id":"8907","type":"AllLabels"}],"root_ids":["8877"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"f6c94c91-c5df-4cd7-8856-9d31a0973df4","root_ids":["8877"],"roots":{"8877":"ff35115c-c04b-4fd6-918c-a3f0d6c7a5ba"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"e796e610-0195-4bd9-afd6-fd00a66cd95a":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"8913"}},"id":"8941","type":"CDSView"},{"attributes":{"end":6},"id":"8920","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"w/UoXO/ngUAraP+oYu6BQO2Oe6nu6YFA9qy1QXfsgUALkA1JQvKBQKQW72wE9oFAVRv3QeHxgUApXI/CdSSCQN/WgoNSK4JAro89MYEmgkCE6/b+OymCQEhwI2VrL4JA/FexU0czgkAo/0ky0S6CQI/C9Sj8YIJAm9n4XUJogkCMQjegSmiCQBMqOLwAZoJAfbxGgZRsgkBVmXM6inCCQPrinCLBa4JA7F3NS2+igkBX3G44MqWCQDMk3YUspYJAomh5ecWigkCyCGqdvamCQLRuKCHNrYJAxjL9ErGogkDFLMWfQt+CQAxL8hIi4oJAmGiQghfigkAwp7o2it+CQMTSwI/a5oJAi+HqAAjrgkCZFlADoeWCQErJvJ+kIYNAx01o7REfg0AFQTZ/Ah+DQL/l+/NOHINAqtleZvMjg0ABpDZxQiiDQGv6ovOQIoNAYxxtZs5eg0A9dydEBV+DQHEZ3HvtW4NATiQ9sRNZg0CYdO88DGGDQHdmguF8ZYNAPt7144Bfg0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8949"},"selection_policy":{"id":"8950"}},"id":"8913","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8914"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8939","type":"Rect"},{"attributes":{},"id":"8924","type":"LinearScale"},{"attributes":{},"id":"8949","type":"Selection"},{"attributes":{},"id":"8927","type":"BasicTicker"},{"attributes":{},"id":"8947","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8913"},"glyph":{"id":"8938"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8939"},"view":{"id":"8941"}},"id":"8940","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8914"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8938","type":"Rect"},{"attributes":{},"id":"8950","type":"UnionRenderers"},{"attributes":{"end":6},"id":"8918","type":"Range1d"},{"attributes":{"below":[{"id":"8926"}],"center":[{"id":"8929"},{"id":"8933"}],"height":400,"left":[{"id":"8930"}],"renderers":[{"id":"8940"}],"title":{"id":"8916"},"toolbar":{"id":"8935"},"toolbar_location":null,"width":400,"x_range":{"id":"8918"},"x_scale":{"id":"8922"},"y_range":{"id":"8920"},"y_scale":{"id":"8924"}},"id":"8915","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"8934"}]},"id":"8935","type":"Toolbar"},{"attributes":{},"id":"8948","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8914","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8944"},"major_label_policy":{"id":"8945"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8927"}},"id":"8926","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8947"},"major_label_policy":{"id":"8948"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8931"}},"id":"8930","type":"LinearAxis"},{"attributes":{"axis":{"id":"8926"},"ticker":null,"visible":false},"id":"8929","type":"Grid"},{"attributes":{},"id":"8944","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8930"},"dimension":1,"ticker":null,"visible":false},"id":"8933","type":"Grid"},{"attributes":{},"id":"8931","type":"BasicTicker"},{"attributes":{},"id":"8945","type":"AllLabels"},{"attributes":{"text":"Duluth \\u2192 Chicago"},"id":"8916","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8934","type":"HoverTool"},{"attributes":{},"id":"8922","type":"LinearScale"}],"root_ids":["8915"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"e796e610-0195-4bd9-afd6-fd00a66cd95a","root_ids":["8915"],"roots":{"8915":"7cb2dc70-cdb9-45c1-b165-5229507324a6"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"e1911da2-2ff4-4495-84f0-dd355386c427":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"8958","type":"Range1d"},{"attributes":{},"id":"8962","type":"LinearScale"},{"attributes":{},"id":"8985","type":"BasicTickFormatter"},{"attributes":{},"id":"8965","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8951"},"glyph":{"id":"8976"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8977"},"view":{"id":"8979"}},"id":"8978","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8952"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8976","type":"Rect"},{"attributes":{},"id":"8986","type":"AllLabels"},{"attributes":{"below":[{"id":"8964"}],"center":[{"id":"8967"},{"id":"8971"}],"height":400,"left":[{"id":"8968"}],"renderers":[{"id":"8978"}],"title":{"id":"8954"},"toolbar":{"id":"8973"},"toolbar_location":null,"width":400,"x_range":{"id":"8956"},"x_scale":{"id":"8960"},"y_range":{"id":"8958"},"y_scale":{"id":"8962"}},"id":"8953","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"8956","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8952","type":"LinearColorMapper"},{"attributes":{},"id":"8987","type":"Selection"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"8982"},"major_label_policy":{"id":"8983"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8965"}},"id":"8964","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"8985"},"major_label_policy":{"id":"8986"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"8969"}},"id":"8968","type":"LinearAxis"},{"attributes":{},"id":"8988","type":"UnionRenderers"},{"attributes":{"axis":{"id":"8964"},"ticker":null,"visible":false},"id":"8967","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"O5XCcupojkCMamwKD1COQN613zWzO45A8rBQa5ozjkAUz9kCAiuOQPTaEfOhG45A7yyL0yohjkDsUbgeRcKOQNodUgzQp45AAplCjBySjkAwFuGBzImOQAhrrXnPgI5Ao68gzbhwjkA4aoXpu3aOQDHIAsumEo9AKvQLwHD4jkCAciVMkuiOQOvgBbaP2I5AvPrCdabWjkBL8Dynz8WOQHkTjf9MzI5Ae9gLBSxqj0ADIy9rok6PQOZG7G6JN49AM7j3ujYuj0Awvy4eeSSPQPrES4HmGo9AwlCHFd4hj0AO2quPx7+PQBrggmyZoo9AL90kBoGVj0BPQBNhw4OPQDRHVn7ZeY9AxOkkW/1vj0AXtmYrb3ePQFLt0/FYAZBAJ/bQPvb3j0Db4ET06+uPQEIFhxdE2Y9ATgmISXjGj0CVfVcEH7yPQEw3iUEAzY9A4LpiRkgtkEDcLF4svCOQQBMNUvDEHJBAjBU1mGYXkEDEsS5usw2QQAq8k09fCJBAQNzVq0gRkEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"8987"},"selection_policy":{"id":"8988"}},"id":"8951","type":"ColumnDataSource"},{"attributes":{},"id":"8982","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"8968"},"dimension":1,"ticker":null,"visible":false},"id":"8971","type":"Grid"},{"attributes":{},"id":"8969","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8952"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8977","type":"Rect"},{"attributes":{},"id":"8983","type":"AllLabels"},{"attributes":{"text":"Duluth \\u2192 Cleveland"},"id":"8954","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"8972","type":"HoverTool"},{"attributes":{},"id":"8960","type":"LinearScale"},{"attributes":{"source":{"id":"8951"}},"id":"8979","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"8972"}]},"id":"8973","type":"Toolbar"}],"root_ids":["8953"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"e1911da2-2ff4-4495-84f0-dd355386c427","root_ids":["8953"],"roots":{"8953":"d1c52481-87a7-42a7-b4e3-6d85c0dd248a"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"72334d93-5ba8-4939-8202-cfcdfd514274":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9023","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8989"},"glyph":{"id":"9014"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9015"},"view":{"id":"9017"}},"id":"9016","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"8990"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9014","type":"Rect"},{"attributes":{"end":6},"id":"8996","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"sp3vpyYqi0BYWdsUHzSLQNwTf2/eKYtAuoGnNYI2i0DRkVz+w0OLQA2wRcHCNYtAEs64un0wi0CamZmZ2XeLQNEAg0kWg4tA1pF+VvR3i0BC+AYVW4WLQHNoke08k4tAgocOJvqEi0ALf+HwXX+LQBkEVg4txYtAUTwdfg3Si0DXo3A9CsaLQNECWfQz1ItAFD/G3LXii0D+8smKMdSLQAvE/CY+zotAmG4Sg4ASjEDK48SyBCGMQNi1YiQgFIxAWXm40wwjjEC1FfvLLjKMQHlehe9oI4xABXUlXR4djEAX2c7301+MQBhV0P4xUoxA0jNiCzZijEDogwqz5XGMQFfsL7ungYxA9clAVKByjEAEukCT/muMQJZDi2wnrYxA5yz9la+ejEDSRVTyS7CMQHaOXJK+wIxAEOm3r4OxjEBwNfy418GMQP5qacneuoxAFK5H4Xr6jEC2BCotLeuMQMzDU9lh/oxA/gS8cZcPjUC0yHa+HwCNQOUMxR0PEY1A9xuS/74JjUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9025"},"selection_policy":{"id":"9026"}},"id":"8989","type":"ColumnDataSource"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"8990","type":"LinearColorMapper"},{"attributes":{},"id":"9024","type":"AllLabels"},{"attributes":{"text":"Duluth \\u2192 Detroit"},"id":"8992","type":"Title"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9020"},"major_label_policy":{"id":"9021"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9003"}},"id":"9002","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9023"},"major_label_policy":{"id":"9024"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9007"}},"id":"9006","type":"LinearAxis"},{"attributes":{"axis":{"id":"9002"},"ticker":null,"visible":false},"id":"9005","type":"Grid"},{"attributes":{},"id":"9026","type":"UnionRenderers"},{"attributes":{},"id":"9020","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9006"},"dimension":1,"ticker":null,"visible":false},"id":"9009","type":"Grid"},{"attributes":{"below":[{"id":"9002"}],"center":[{"id":"9005"},{"id":"9009"}],"height":400,"left":[{"id":"9006"}],"renderers":[{"id":"9016"}],"title":{"id":"8992"},"toolbar":{"id":"9011"},"toolbar_location":null,"width":400,"x_range":{"id":"8994"},"x_scale":{"id":"8998"},"y_range":{"id":"8996"},"y_scale":{"id":"9000"}},"id":"8991","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9007","type":"BasicTicker"},{"attributes":{},"id":"9021","type":"AllLabels"},{"attributes":{},"id":"9025","type":"Selection"},{"attributes":{"end":6},"id":"8994","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9010","type":"HoverTool"},{"attributes":{},"id":"8998","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"9010"}]},"id":"9011","type":"Toolbar"},{"attributes":{"source":{"id":"8989"}},"id":"9017","type":"CDSView"},{"attributes":{},"id":"9003","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"8990"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9015","type":"Rect"},{"attributes":{},"id":"9000","type":"LinearScale"}],"root_ids":["8991"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"72334d93-5ba8-4939-8202-cfcdfd514274","root_ids":["8991"],"roots":{"8991":"99970883-1037-4fdd-bcf6-d07a3b7e09b6"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"1829d957-0ac1-441d-8384-106cc7a050dd":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9038","type":"LinearScale"},{"attributes":{"axis":{"id":"9044"},"dimension":1,"ticker":null,"visible":false},"id":"9047","type":"Grid"},{"attributes":{},"id":"9062","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9028","type":"LinearColorMapper"},{"attributes":{},"id":"9045","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"uoRDb/E5kEAyBWucTS+QQLND/MOGMZBAXtkFg3srkEBRTN4A4yeQQIuKOJ30IJBAHERrRUsZkEBHHLKBtG2QQMHJNnBHYpBArkfhepRkkEAnLscr8F2QQNb8+EsLWpBARnnm5aBSkED+0TdpekqQQFlqvd94oZBAO1W+ZwSbkECpS8YxopeQQPGCiNRkkJBAXK0TlzOMkEABaJQuTYSQQOFfBI2pe5BAcuFASDbPkEBkyRzLW86QQKVPq+ivypBAutdJfdnCkEDhXS7iW76QQL1WQnf5tZBAogkUsdiskECF61G4ngKRQK8hOC6zAZFAWd/A5Lb9kEBTBaOSWvyQQGcOSS2E8JBAVmEzwKXnkECFl+DUB96QQJombD/JPJFA2ZWWkQo1kUD2zmirsjCRQFn4+lo3L5FAy9qmeKwikUASUOEIUhmRQGglrfg2D5FAmus00oJwkUAk7rH0YWiRQJS+EHKuY5FAPgeWIxRikUBQi8HD1FSRQM0+j1H+SpFASrN5HGZAkUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9063"},"selection_policy":{"id":"9064"}},"id":"9027","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"9048"}]},"id":"9049","type":"Toolbar"},{"attributes":{"end":6},"id":"9034","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9028"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9052","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9048","type":"HoverTool"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9061"},"major_label_policy":{"id":"9062"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9045"}},"id":"9044","type":"LinearAxis"},{"attributes":{},"id":"9058","type":"BasicTickFormatter"},{"attributes":{},"id":"9061","type":"BasicTickFormatter"},{"attributes":{"text":"Duluth \\u2192 Hamilton"},"id":"9030","type":"Title"},{"attributes":{},"id":"9059","type":"AllLabels"},{"attributes":{},"id":"9063","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9028"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9053","type":"Rect"},{"attributes":{},"id":"9036","type":"LinearScale"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9058"},"major_label_policy":{"id":"9059"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9041"}},"id":"9040","type":"LinearAxis"},{"attributes":{"source":{"id":"9027"}},"id":"9055","type":"CDSView"},{"attributes":{},"id":"9064","type":"UnionRenderers"},{"attributes":{},"id":"9041","type":"BasicTicker"},{"attributes":{"axis":{"id":"9040"},"ticker":null,"visible":false},"id":"9043","type":"Grid"},{"attributes":{"data_source":{"id":"9027"},"glyph":{"id":"9052"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9053"},"view":{"id":"9055"}},"id":"9054","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9040"}],"center":[{"id":"9043"},{"id":"9047"}],"height":400,"left":[{"id":"9044"}],"renderers":[{"id":"9054"}],"title":{"id":"9030"},"toolbar":{"id":"9049"},"toolbar_location":null,"width":400,"x_range":{"id":"9032"},"x_scale":{"id":"9036"},"y_range":{"id":"9034"},"y_scale":{"id":"9038"}},"id":"9029","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"9032","type":"Range1d"}],"root_ids":["9029"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"1829d957-0ac1-441d-8384-106cc7a050dd","root_ids":["9029"],"roots":{"9029":"686c59a3-f600-41f8-a7f3-0e4b055522c5"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"b3bf7650-5128-4277-abbd-504310ac8592":{"defs":[],"roots":{"references":[{"attributes":{"data":{"val":{"__ndarray__":"3Qa131rQfUB0EM9tncd9QCY9Z2aBvn1A7YTymUezfUDfMHZnUr99QHI1siuNyn1AKLnDJtLpfUDXipGAjDZ+QDSdQlP7LH5Ar1C1JzIjfkB3tuy1BRd+QDyVHSzNI35A7D8h8QEwfkAB7O3gMVF+QNEObiG+nH5A8ym2OFmSfkA5ZAPp4od+QPS/AdLDen5AmvnE8EeIfkBYIqu2dpV+QM32MpuRuH5Ay5JKwu8Cf0Cztiket/d+QM+fNqqT7H5AcMkW7oHefkDqNYe1wux+QNIsGnzr+n5AmQF4VfEff0DFFidjIWl/QHJDnQMVXX9AWbOEa0RRf0D6+hAKQEJ/QEeaLno9UX9ATDeJQWBgf0BzNKIPUYd/QM3C6ANTz39AMtAQ6XLCf0Dv7rcs9bV/QHcEJib+pX9Apf7VPri1f0DGQfgG1cV/QD8/58mw7n9AY6NiUsIagEBymk9n6BOAQDwBA/dSDYBAABsQId4EgECBsb6BGQ2AQCCmM+akFYBABSUWQggrgEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9101"},"selection_policy":{"id":"9102"}},"id":"9065","type":"ColumnDataSource"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9099"},"major_label_policy":{"id":"9100"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9083"}},"id":"9082","type":"LinearAxis"},{"attributes":{},"id":"9096","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9078"},"ticker":null,"visible":false},"id":"9081","type":"Grid"},{"attributes":{"text":"Duluth \\u2192 Milwaukee"},"id":"9068","type":"Title"},{"attributes":{},"id":"9074","type":"LinearScale"},{"attributes":{},"id":"9097","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9066"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9090","type":"Rect"},{"attributes":{"end":6},"id":"9072","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9066","type":"LinearColorMapper"},{"attributes":{},"id":"9101","type":"Selection"},{"attributes":{},"id":"9076","type":"LinearScale"},{"attributes":{"below":[{"id":"9078"}],"center":[{"id":"9081"},{"id":"9085"}],"height":400,"left":[{"id":"9082"}],"renderers":[{"id":"9092"}],"title":{"id":"9068"},"toolbar":{"id":"9087"},"toolbar_location":null,"width":400,"x_range":{"id":"9070"},"x_scale":{"id":"9074"},"y_range":{"id":"9072"},"y_scale":{"id":"9076"}},"id":"9067","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9079","type":"BasicTicker"},{"attributes":{"source":{"id":"9065"}},"id":"9093","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9066"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9091","type":"Rect"},{"attributes":{"active_multi":null,"tools":[{"id":"9086"}]},"id":"9087","type":"Toolbar"},{"attributes":{},"id":"9102","type":"UnionRenderers"},{"attributes":{},"id":"9099","type":"BasicTickFormatter"},{"attributes":{"end":6},"id":"9070","type":"Range1d"},{"attributes":{"axis":{"id":"9082"},"dimension":1,"ticker":null,"visible":false},"id":"9085","type":"Grid"},{"attributes":{"data_source":{"id":"9065"},"glyph":{"id":"9090"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9091"},"view":{"id":"9093"}},"id":"9092","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9096"},"major_label_policy":{"id":"9097"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9079"}},"id":"9078","type":"LinearAxis"},{"attributes":{},"id":"9083","type":"BasicTicker"},{"attributes":{},"id":"9100","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9086","type":"HoverTool"}],"root_ids":["9067"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"b3bf7650-5128-4277-abbd-504310ac8592","root_ids":["9067"],"roots":{"9067":"9c4b992c-e936-410d-ac3b-c74bf03a14c5"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"3aa9dafa-09e6-4b4e-bdb8-db197b9caaf3":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"9124"}]},"id":"9125","type":"Toolbar"},{"attributes":{},"id":"9121","type":"BasicTicker"},{"attributes":{},"id":"9134","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"3SdHAfJxlEDdJ0cB8nGUQBZqTfNOiJRAyVpDqW2blEDJWkOpbZuUQMP1KFxPrJRAGvm84snAlEBiEcMOk6mUQGIRww6TqZRAGQRWDs27lEDd7A+Uu9CUQN3sD5S70JRAuB6F6xHjlECkpl1M0/iUQBSxiGFX25RAFLGIYVfblEC0WfW5WvaUQPF+3H4JBpVA8X7cfgkGlUCuR+F61BmVQC5U/rXcMJVApGyRtBsNlUCkbJG0Gw2VQH6MuWtJKpVAHhX/dwRDlUAeFf93BEOVQKRwPQqXUJVAlx3iH+ZolUBWDFcH4D6VQFYMVwfgPpVASL99HThelUApzHucqXiVQCnMe5ypeJVAmpmZmVmHlUAhy4KJ76CVQAisHFqkcJVACKwcWqRwlUAT8kHPJpKVQBKfO8FOrpVAEp87wU6ulUCPwvUoHL6VQKt4I/P42JVAukvirGiilUC6S+KsaKKVQN0kBoEVxpVA/HH75fPjlUD8cfvl8+OVQIXrUbje9JVAFEIHXQIRlkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9139"},"selection_policy":{"id":"9140"}},"id":"9103","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9103"}},"id":"9131","type":"CDSView"},{"attributes":{"text":"Duluth \\u2192 Montreal"},"id":"9106","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9124","type":"HoverTool"},{"attributes":{},"id":"9112","type":"LinearScale"},{"attributes":{},"id":"9135","type":"AllLabels"},{"attributes":{"end":6},"id":"9110","type":"Range1d"},{"attributes":{},"id":"9139","type":"Selection"},{"attributes":{},"id":"9114","type":"LinearScale"},{"attributes":{},"id":"9117","type":"BasicTicker"},{"attributes":{},"id":"9140","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9108","type":"Range1d"},{"attributes":{"below":[{"id":"9116"}],"center":[{"id":"9119"},{"id":"9123"}],"height":400,"left":[{"id":"9120"}],"renderers":[{"id":"9130"}],"title":{"id":"9106"},"toolbar":{"id":"9125"},"toolbar_location":null,"width":400,"x_range":{"id":"9108"},"x_scale":{"id":"9112"},"y_range":{"id":"9110"},"y_scale":{"id":"9114"}},"id":"9105","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9137","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9120"},"dimension":1,"ticker":null,"visible":false},"id":"9123","type":"Grid"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9104","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9134"},"major_label_policy":{"id":"9135"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9117"}},"id":"9116","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9137"},"major_label_policy":{"id":"9138"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9121"}},"id":"9120","type":"LinearAxis"},{"attributes":{"axis":{"id":"9116"},"ticker":null,"visible":false},"id":"9119","type":"Grid"},{"attributes":{},"id":"9138","type":"AllLabels"},{"attributes":{"data_source":{"id":"9103"},"glyph":{"id":"9128"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9129"},"view":{"id":"9131"}},"id":"9130","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9104"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9129","type":"Rect"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9104"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9128","type":"Rect"}],"root_ids":["9105"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"3aa9dafa-09e6-4b4e-bdb8-db197b9caaf3","root_ids":["9105"],"roots":{"9105":"f45c5d7d-fed4-4245-90cf-2405624acc5b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"46d00cd8-1ea3-4ffb-a294-8f27ba9678b6":{"defs":[],"roots":{"references":[{"attributes":{"text":"Duluth \\u2192 Thunder Bay"},"id":"9144","type":"Title"},{"attributes":{},"id":"9176","type":"AllLabels"},{"attributes":{},"id":"9150","type":"LinearScale"},{"attributes":{},"id":"9172","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"9141"}},"id":"9169","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9162"}]},"id":"9163","type":"Toolbar"},{"attributes":{},"id":"9177","type":"Selection"},{"attributes":{"end":6},"id":"9148","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9142"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9167","type":"Rect"},{"attributes":{},"id":"9152","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9162","type":"HoverTool"},{"attributes":{},"id":"9155","type":"BasicTicker"},{"attributes":{},"id":"9175","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9141"},"glyph":{"id":"9166"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9167"},"view":{"id":"9169"}},"id":"9168","type":"GlyphRenderer"},{"attributes":{},"id":"9178","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9142"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9166","type":"Rect"},{"attributes":{"end":6},"id":"9146","type":"Range1d"},{"attributes":{"below":[{"id":"9154"}],"center":[{"id":"9157"},{"id":"9161"}],"height":400,"left":[{"id":"9158"}],"renderers":[{"id":"9168"}],"title":{"id":"9144"},"toolbar":{"id":"9163"},"toolbar_location":null,"width":400,"x_range":{"id":"9146"},"x_scale":{"id":"9150"},"y_range":{"id":"9148"},"y_scale":{"id":"9152"}},"id":"9143","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9142","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9172"},"major_label_policy":{"id":"9173"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9155"}},"id":"9154","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9175"},"major_label_policy":{"id":"9176"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9159"}},"id":"9158","type":"LinearAxis"},{"attributes":{"axis":{"id":"9154"},"ticker":null,"visible":false},"id":"9157","type":"Grid"},{"attributes":{},"id":"9173","type":"AllLabels"},{"attributes":{"axis":{"id":"9158"},"dimension":1,"ticker":null,"visible":false},"id":"9161","type":"Grid"},{"attributes":{},"id":"9159","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"ObTIdv4acUAX4kfrvhpxQLlOyHPCInFA4zYawNsVcUDuNU5UoCJxQB7G/3hKEXFA+W5OgNwxcUBmZmZmJlhxQK0j/azoV3FAvgRdsVVgcUASg8DKYVJxQLcDGhERYHFA8J6oEX9NcUCvYkxVVXBxQJMYBFZOlXFAObTIdr6ncUDQ4tbu6J1xQELPZtXnjnFAgdHlzYGdcUDCd1Gqs4lxQGVWSirOrnFAwcqhRXbScUB+Yxks5uVxQNWYayx823FAcRsN4G3LcUBKn7GK8tpxQJRQ+kLoxXFAHEpI/0btcUDufD81ng9yQLbqhOENJHJA2k4Aag8ZckChZ7Pq8wdyQBNtfUdjGHJAWAG+2xwCckDSPUbUvytyQBsv3STGTHJA+5nVljVickDtLHqnolZyQNCzWfV5RHJA3DpJBNRVckAq2mZ0UT5yQIgxRKk4anJASOF6FO6JckAyIUFMXaByQPLiDuU1lHJAAAAAAACBckCmCBXBRJNyQPuyDw2GenJAPiVCfrGockA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9177"},"selection_policy":{"id":"9178"}},"id":"9141","type":"ColumnDataSource"}],"root_ids":["9143"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"46d00cd8-1ea3-4ffb-a294-8f27ba9678b6","root_ids":["9143"],"roots":{"9143":"01585d7a-9bab-4d0b-b569-12c443c94f0b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"22eae13c-419b-48b4-b218-2582933e688d":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"9186","type":"Range1d"},{"attributes":{},"id":"9215","type":"Selection"},{"attributes":{},"id":"9190","type":"LinearScale"},{"attributes":{},"id":"9213","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"VcjwM0kLi0DdzfhjvwSLQDC4i9Xb94pAll9hHPcKi0Ad5ssLsAOLQEQC/Amd/IpASgwCK8cIi0CY6rjQC0+LQIxespZ3VYtA8yJuqU5Vi0ArZ5TTE06LQBDpt69DR4tAhncUQpJNi0BR7LKplFqLQGYok79An4tAQ4NeyS+mi0Aowjwa7aWLQNmvO93pj4tAY7ml1ZCXi0DPgB96h56LQFjMYyhirItAPPpfrnXvi0DzExj85/aLQI4xwbor54tAA9L+B5jfi0C1iZP73eeLQBH2N7J874tAX6wUpy/+i0AKODqdqj+MQKOk0S6gR4xAEHS0qjU3jEAKMCx/fi+MQAhagSErOIxAWf9C6nFAjEBtILgl/U+MQKPsiJ6/f4xAQxYOKZuHjEDAC7ZsaIeMQPkWMUdqf4xAWipvR3iIjECbdFsiZ5GMQHUAaaTKoYxAOZGqNxTPjEBxPQrXo9eMQM2LuKW614xA4mlDD1bPjECt+lxtxdiMQON9Zlpc4oxAfOAZI5jzjEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9215"},"selection_policy":{"id":"9216"}},"id":"9179","type":"ColumnDataSource"},{"attributes":{},"id":"9193","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9179"},"glyph":{"id":"9204"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9205"},"view":{"id":"9207"}},"id":"9206","type":"GlyphRenderer"},{"attributes":{},"id":"9216","type":"UnionRenderers"},{"attributes":{},"id":"9214","type":"AllLabels"},{"attributes":{"end":6},"id":"9184","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9180"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9204","type":"Rect"},{"attributes":{"below":[{"id":"9192"}],"center":[{"id":"9195"},{"id":"9199"}],"height":400,"left":[{"id":"9196"}],"renderers":[{"id":"9206"}],"title":{"id":"9182"},"toolbar":{"id":"9201"},"toolbar_location":null,"width":400,"x_range":{"id":"9184"},"x_scale":{"id":"9188"},"y_range":{"id":"9186"},"y_scale":{"id":"9190"}},"id":"9181","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9210"},"major_label_policy":{"id":"9211"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9193"}},"id":"9192","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9180","type":"LinearColorMapper"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9213"},"major_label_policy":{"id":"9214"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9197"}},"id":"9196","type":"LinearAxis"},{"attributes":{"axis":{"id":"9192"},"ticker":null,"visible":false},"id":"9195","type":"Grid"},{"attributes":{},"id":"9210","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9196"},"dimension":1,"ticker":null,"visible":false},"id":"9199","type":"Grid"},{"attributes":{},"id":"9197","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9180"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9205","type":"Rect"},{"attributes":{},"id":"9211","type":"AllLabels"},{"attributes":{"text":"Duluth \\u2192 Toledo"},"id":"9182","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9200","type":"HoverTool"},{"attributes":{},"id":"9188","type":"LinearScale"},{"attributes":{"source":{"id":"9179"}},"id":"9207","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9200"}]},"id":"9201","type":"Toolbar"}],"root_ids":["9181"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"22eae13c-419b-48b4-b218-2582933e688d","root_ids":["9181"],"roots":{"9181":"efab1e51-a4b1-4614-9285-ecd998d12354"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"72164c15-244f-43e2-817d-0d31b9c1898e":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9231","type":"BasicTicker"},{"attributes":{},"id":"9253","type":"Selection"},{"attributes":{},"id":"9251","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9217"},"glyph":{"id":"9242"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9243"},"view":{"id":"9245"}},"id":"9244","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9218"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9242","type":"Rect"},{"attributes":{},"id":"9254","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9222","type":"Range1d"},{"attributes":{"below":[{"id":"9230"}],"center":[{"id":"9233"},{"id":"9237"}],"height":400,"left":[{"id":"9234"}],"renderers":[{"id":"9244"}],"title":{"id":"9220"},"toolbar":{"id":"9239"},"toolbar_location":null,"width":400,"x_range":{"id":"9222"},"x_scale":{"id":"9226"},"y_range":{"id":"9224"},"y_scale":{"id":"9228"}},"id":"9219","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9252","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9218","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9248"},"major_label_policy":{"id":"9249"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9231"}},"id":"9230","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9251"},"major_label_policy":{"id":"9252"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9235"}},"id":"9234","type":"LinearAxis"},{"attributes":{"axis":{"id":"9230"},"ticker":null,"visible":false},"id":"9233","type":"Grid"},{"attributes":{},"id":"9248","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9234"},"dimension":1,"ticker":null,"visible":false},"id":"9237","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"ob5lTsc4kUCiQ+BIgCmRQHWTGAS2JpFAJxHhX6QmkUDEB3b8NyqRQJiG4SPiNJFAY9NKIWA2kUD2KFyPYmuRQBcSMLo8W5FAHNKowGlekUAIrBxaBFiRQArXo3C9W5FAMLsnD+tmkUBbttYXmWiRQEuTUtD9nZFA1CzQ7gCNkUCH+IctLZCRQJOmQdFsiZFAUKbR5EKNkUDI723685iRQHR9Hw7SmpFAoP1IEZnQkUA3M/rRoMWRQPMeZ5rwwZFAduEH5+O6kUA1e6AVyL6RQLsKKT9ZwpFAjURoBAvNkUD1Zz9SNAOSQPeTMT7M/pFAPWGJB7TzkUA3OBH9WuyRQNjzNctF8JFAuRluwAf0kUCFJ/T6Q/+RQGu28pLPNZJAflGC/oI4kkCph2h0dyWSQBlz1xLSHZJAemzLgMMhkkDOGVHaWxySQJ7uPPF8MZJAwCDp02pokkCF6ubiH2uSQFgepKdIV5JA+62dKElPkkAd5WA2QVOSQAmKH2OuTZJAltHI57VjkkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9253"},"selection_policy":{"id":"9254"}},"id":"9217","type":"ColumnDataSource"},{"attributes":{},"id":"9235","type":"BasicTicker"},{"attributes":{},"id":"9249","type":"AllLabels"},{"attributes":{"text":"Duluth \\u2192 Toronto"},"id":"9220","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9238","type":"HoverTool"},{"attributes":{},"id":"9226","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"9238"}]},"id":"9239","type":"Toolbar"},{"attributes":{"source":{"id":"9217"}},"id":"9245","type":"CDSView"},{"attributes":{"end":6},"id":"9224","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9218"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9243","type":"Rect"},{"attributes":{},"id":"9228","type":"LinearScale"}],"root_ids":["9219"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"72164c15-244f-43e2-817d-0d31b9c1898e","root_ids":["9219"],"roots":{"9219":"4a0b8598-21a9-432f-b23f-c0400e0630be"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"6a2591ac-e61c-46cb-8558-344fb7bf4a2b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9289","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9256"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9280","type":"Rect"},{"attributes":{},"id":"9290","type":"AllLabels"},{"attributes":{"below":[{"id":"9268"}],"center":[{"id":"9271"},{"id":"9275"}],"height":400,"left":[{"id":"9272"}],"renderers":[{"id":"9282"}],"title":{"id":"9258"},"toolbar":{"id":"9277"},"toolbar_location":null,"width":400,"x_range":{"id":"9260"},"x_scale":{"id":"9264"},"y_range":{"id":"9262"},"y_scale":{"id":"9266"}},"id":"9257","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"9260","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9256","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9286"},"major_label_policy":{"id":"9287"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9269"}},"id":"9268","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9289"},"major_label_policy":{"id":"9290"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9273"}},"id":"9272","type":"LinearAxis"},{"attributes":{"axis":{"id":"9268"},"ticker":null,"visible":false},"id":"9271","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"eN0RBH4ki0Aq2JDJ0zCLQAzwOKDAIotA9sfFYlUci0CmoaHa+xuLQOxRuB6FGotAEUtvJEUWi0B5b7FHnXeLQMBOoD5YhYtArkfhejR2i0BUgg9vV2+LQDBDiNA9b4tAViKait5ti0BIAJJEWmmLQMP1KFyvyotAkIB2LEvKi0BuCQrN38mLQLI8WXtZwotAuuRuxn/Ci0AxkuKIOsGLQH+1tGRvvItADHygcMEdjECJHwg16AyMQBonzwb6DIxAEPeih1sVjEA+8mK8wRWMQAwCK4eWFIxAtmrXhIQPjEBPbiWF03CMQHhtJSoqX4xAQ4Neya9fjEBvseyTXWiMQMiTSbIDaYxA6HFzhfJnjEDsH/qkmWKMQJj0nJnlw4xA3TUy2YmxjEBs3+2LZbKMQL6fGi/dqIxAUjUwqEW8jEDD4buDTruMQBxBKsWutYxA9ihcj2IEjUAjqqbaDQSNQItk2d3dBI1AMU4yKOn6jEDc1haehw+NQJ5RBIKqDo1AU/ZM5cMIjUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9291"},"selection_policy":{"id":"9292"}},"id":"9255","type":"ColumnDataSource"},{"attributes":{},"id":"9286","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9272"},"dimension":1,"ticker":null,"visible":false},"id":"9275","type":"Grid"},{"attributes":{},"id":"9273","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9256"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9281","type":"Rect"},{"attributes":{},"id":"9287","type":"AllLabels"},{"attributes":{},"id":"9291","type":"Selection"},{"attributes":{"text":"Duluth \\u2192 Windsor"},"id":"9258","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9276","type":"HoverTool"},{"attributes":{},"id":"9264","type":"LinearScale"},{"attributes":{"source":{"id":"9255"}},"id":"9283","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9276"}]},"id":"9277","type":"Toolbar"},{"attributes":{},"id":"9292","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9262","type":"Range1d"},{"attributes":{},"id":"9266","type":"LinearScale"},{"attributes":{},"id":"9269","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9255"},"glyph":{"id":"9280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9281"},"view":{"id":"9283"}},"id":"9282","type":"GlyphRenderer"}],"root_ids":["9257"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"6a2591ac-e61c-46cb-8558-344fb7bf4a2b","root_ids":["9257"],"roots":{"9257":"67745ed3-33cf-426b-a630-41a5fb558ac5"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"cd6d18bd-d317-4af5-a830-64686ee77da4":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"9298","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"PQrXo3DYgkAnMQisnMSCQBsF0g/EsYJAmG4Sg/CegkD7yRgf9oaCQOkmMQgscYJA15OvuuSGgkCuR+F6lBuDQI72iU3lBYNAWlwtwQPygkCCoVi41t2CQCGQSxxpxIJAFKXO7U+tgkCYnlULMcSCQB+F61G4XoNA9rsL7y1Hg0CYs4hyQzKDQHNoke28HINAQcKLGdwBg0A/I2zTc+mCQGA97lt9AYNAj8L1KNyhg0BPVNvyhoiDQNcK5CODcoNAXZvXIqNbg0BmiL4WTz+DQHA1/LiXJYNAIUiUrMk+g0AAAAAAAOWDQHBxnvtsyoNAFmI/1cKyg0BOYhBYiZqDQIa6/hPCfINAm7OZnrthg0Dp5iz9FXyDQHE9CtcjKIRAkI5hBFMMhEBUuZqGAvODQDiVVo1v2YNApew+ETW6g0DFMTeE352DQKrx0k1iuYNA4XoUrkdrhECxqyQNOU6EQJMQ9jdCM4RAKVyPwlUYhEDLsnEOqPeDQPCv1GkD2oNAa/x4nq72g0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9329"},"selection_policy":{"id":"9330"}},"id":"9293","type":"ColumnDataSource"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9294","type":"LinearColorMapper"},{"attributes":{},"id":"9307","type":"BasicTicker"},{"attributes":{},"id":"9328","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9294"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9318","type":"Rect"},{"attributes":{"end":6},"id":"9300","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9324"},"major_label_policy":{"id":"9325"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9307"}},"id":"9306","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9327"},"major_label_policy":{"id":"9328"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9311"}},"id":"9310","type":"LinearAxis"},{"attributes":{"text":"Hamilton \\u2192 Chicago"},"id":"9296","type":"Title"},{"attributes":{"axis":{"id":"9306"},"ticker":null,"visible":false},"id":"9309","type":"Grid"},{"attributes":{},"id":"9324","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9310"},"dimension":1,"ticker":null,"visible":false},"id":"9313","type":"Grid"},{"attributes":{},"id":"9311","type":"BasicTicker"},{"attributes":{},"id":"9325","type":"AllLabels"},{"attributes":{},"id":"9329","type":"Selection"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9314","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"9314"}]},"id":"9315","type":"Toolbar"},{"attributes":{"source":{"id":"9293"}},"id":"9321","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9294"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9319","type":"Rect"},{"attributes":{},"id":"9330","type":"UnionRenderers"},{"attributes":{"below":[{"id":"9306"}],"center":[{"id":"9309"},{"id":"9313"}],"height":400,"left":[{"id":"9310"}],"renderers":[{"id":"9320"}],"title":{"id":"9296"},"toolbar":{"id":"9315"},"toolbar_location":null,"width":400,"x_range":{"id":"9298"},"x_scale":{"id":"9302"},"y_range":{"id":"9300"},"y_scale":{"id":"9304"}},"id":"9295","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9304","type":"LinearScale"},{"attributes":{},"id":"9327","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9293"},"glyph":{"id":"9318"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9319"},"view":{"id":"9321"}},"id":"9320","type":"GlyphRenderer"},{"attributes":{},"id":"9302","type":"LinearScale"}],"root_ids":["9295"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"cd6d18bd-d317-4af5-a830-64686ee77da4","root_ids":["9295"],"roots":{"9295":"06494a62-8005-4db8-a64b-c73bf998573c"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"362bca95-2909-4f8e-945b-866738b30ab6":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9342","type":"LinearScale"},{"attributes":{"below":[{"id":"9344"}],"center":[{"id":"9347"},{"id":"9351"}],"height":400,"left":[{"id":"9348"}],"renderers":[{"id":"9358"}],"title":{"id":"9334"},"toolbar":{"id":"9353"},"toolbar_location":null,"width":400,"x_range":{"id":"9336"},"x_scale":{"id":"9340"},"y_range":{"id":"9338"},"y_scale":{"id":"9342"}},"id":"9333","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9332","type":"LinearColorMapper"},{"attributes":{"active_multi":null,"tools":[{"id":"9352"}]},"id":"9353","type":"Toolbar"},{"attributes":{},"id":"9366","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9352","type":"HoverTool"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9332"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9356","type":"Rect"},{"attributes":{"axis":{"id":"9348"},"dimension":1,"ticker":null,"visible":false},"id":"9351","type":"Grid"},{"attributes":{},"id":"9362","type":"BasicTickFormatter"},{"attributes":{"text":"Hamilton \\u2192 Cleveland"},"id":"9334","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9332"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9357","type":"Rect"},{"attributes":{"data":{"val":{"__ndarray__":"JYgEnVrydUDcwHhh5vJ1QGKjB5kf/nVAmSoYlVT3dUClEwmm2gJ2QCTsgJCxM3ZAzfgIRo9NdkBHUncKXkN2QKKCHsWUS3ZASOF6FK5PdkDIZqJjQkh2QACVhQqpVHZA1yJYC+KIdkAFK/P7o6R2QHZEz3dhlHZAfxpSoAqddkAtH+6PPKF2QOl6RzIwmXZATe4cb3emdkCXgRSGEt52QD5d3bG4+3ZAmA5C5WTldkBPiqB7gO52QBJdYQvL8nZAF7fRAB7qdkCbR7TTRfh2QFjg0ABDM3dAaWfiZ81Sd0DIAJpSaDZ3QB767lb2P3dA95rUhllEd0BG81vPCzt3QOigSzgUSndAGD+Ne3OId0Chmcwd4ql3QPfy8b9rh3dAg9Q3emaRd0CqquFshJ93QGcHAZ75i3dANvrinOKbd0DLdWT2o913QMyj0dP2AHhAGb1kLW/Yd0CXlYFe0+J3QE6IbxeQ8XdAlkOLbOfcd0CDU3oBse13QIzUIHHUMnhABda7iQtYeEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9367"},"selection_policy":{"id":"9368"}},"id":"9331","type":"ColumnDataSource"},{"attributes":{},"id":"9363","type":"AllLabels"},{"attributes":{},"id":"9367","type":"Selection"},{"attributes":{},"id":"9349","type":"BasicTicker"},{"attributes":{"source":{"id":"9331"}},"id":"9359","type":"CDSView"},{"attributes":{},"id":"9368","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9338","type":"Range1d"},{"attributes":{"end":6},"id":"9336","type":"Range1d"},{"attributes":{},"id":"9345","type":"BasicTicker"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9362"},"major_label_policy":{"id":"9363"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9345"}},"id":"9344","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9331"},"glyph":{"id":"9356"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9357"},"view":{"id":"9359"}},"id":"9358","type":"GlyphRenderer"},{"attributes":{},"id":"9365","type":"BasicTickFormatter"},{"attributes":{},"id":"9340","type":"LinearScale"},{"attributes":{"axis":{"id":"9344"},"ticker":null,"visible":false},"id":"9347","type":"Grid"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9365"},"major_label_policy":{"id":"9366"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9349"}},"id":"9348","type":"LinearAxis"}],"root_ids":["9333"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"362bca95-2909-4f8e-945b-866738b30ab6","root_ids":["9333"],"roots":{"9333":"9b64d00f-a5e5-42de-b900-bc191dc04c2d"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"cec44d90-56f3-4883-9231-144e3063e2ec":{"defs":[],"roots":{"references":[{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9390","type":"HoverTool"},{"attributes":{},"id":"9400","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"O6kvS9s+cUAvJBbnvpZxQMd9ULxP5HFAKVyPwpUtckDGvgkqr19yQKnhthHKknJAyuYFMyHCckC2OYTgB31xQC8kFuf+2nFAEoPAyqEtckAfhetR2HtyQN9gue+isXJAUq+lkQDockD5HuSrkxpzQDHK2HU0u3FALyQW5z4fckBeiDDZ83ZyQI2XbhIjwXJA+QJptZYDc0AIpXkRNz1zQBsv3SQGc3NArFotC2H5cUDJdr6fWmNyQJxlu+dFwHJAHnnWJA4Pc0ASpRh7ilVzQLByaJFtknNAPD/WnXjLc0An64GgjTdyQDeJQWBlp3JA6Gor9pcJc0ChMlk3+VxzQCxHyEB+p3NAWUBXEaTnc0Brd7QW6yN0QKJ71jW6dXJAppvEIHDrckAzcJsE6lJzQDIUwUnkqnNARul3BnL5c0APNiuR2jx0QI2HrY9dfHRAEORFy+azckAUrkfhei9zQHJNJhM8nHNAw/UoXM/4c0B6h4DoTkt0QLcDGhERknRAr5emCNDUdEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9405"},"selection_policy":{"id":"9406"}},"id":"9369","type":"ColumnDataSource"},{"attributes":{"text":"Hamilton \\u2192 Detroit"},"id":"9372","type":"Title"},{"attributes":{},"id":"9378","type":"LinearScale"},{"attributes":{},"id":"9401","type":"AllLabels"},{"attributes":{"end":6},"id":"9376","type":"Range1d"},{"attributes":{},"id":"9380","type":"LinearScale"},{"attributes":{},"id":"9405","type":"Selection"},{"attributes":{},"id":"9383","type":"BasicTicker"},{"attributes":{"source":{"id":"9369"}},"id":"9397","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9370"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9395","type":"Rect"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9370"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9394","type":"Rect"},{"attributes":{},"id":"9406","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9374","type":"Range1d"},{"attributes":{"below":[{"id":"9382"}],"center":[{"id":"9385"},{"id":"9389"}],"height":400,"left":[{"id":"9386"}],"renderers":[{"id":"9396"}],"title":{"id":"9372"},"toolbar":{"id":"9391"},"toolbar_location":null,"width":400,"x_range":{"id":"9374"},"x_scale":{"id":"9378"},"y_range":{"id":"9376"},"y_scale":{"id":"9380"}},"id":"9371","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9403","type":"BasicTickFormatter"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9370","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"9369"},"glyph":{"id":"9394"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9395"},"view":{"id":"9397"}},"id":"9396","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9400"},"major_label_policy":{"id":"9401"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9383"}},"id":"9382","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9403"},"major_label_policy":{"id":"9404"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9387"}},"id":"9386","type":"LinearAxis"},{"attributes":{"axis":{"id":"9382"},"ticker":null,"visible":false},"id":"9385","type":"Grid"},{"attributes":{},"id":"9404","type":"AllLabels"},{"attributes":{"axis":{"id":"9386"},"dimension":1,"ticker":null,"visible":false},"id":"9389","type":"Grid"},{"attributes":{},"id":"9387","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"9390"}]},"id":"9391","type":"Toolbar"}],"root_ids":["9371"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"cec44d90-56f3-4883-9231-144e3063e2ec","root_ids":["9371"],"roots":{"9371":"f67cf4e8-3d58-4a0e-9185-ea8d688d9567"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"2b170ff8-bc58-4f00-a487-47a1d861ecfc":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9438","type":"BasicTickFormatter"},{"attributes":{"text":"Hamilton \\u2192 Duluth"},"id":"9410","type":"Title"},{"attributes":{},"id":"9439","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9428","type":"HoverTool"},{"attributes":{},"id":"9416","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"9428"}]},"id":"9429","type":"Toolbar"},{"attributes":{},"id":"9442","type":"AllLabels"},{"attributes":{"source":{"id":"9407"}},"id":"9435","type":"CDSView"},{"attributes":{"end":6},"id":"9414","type":"Range1d"},{"attributes":{},"id":"9441","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9408"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9433","type":"Rect"},{"attributes":{},"id":"9418","type":"LinearScale"},{"attributes":{},"id":"9421","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9408"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9432","type":"Rect"},{"attributes":{"below":[{"id":"9420"}],"center":[{"id":"9423"},{"id":"9427"}],"height":400,"left":[{"id":"9424"}],"renderers":[{"id":"9434"}],"title":{"id":"9410"},"toolbar":{"id":"9429"},"toolbar_location":null,"width":400,"x_range":{"id":"9412"},"x_scale":{"id":"9416"},"y_range":{"id":"9414"},"y_scale":{"id":"9418"}},"id":"9409","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"9412","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9408","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9438"},"major_label_policy":{"id":"9439"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9421"}},"id":"9420","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9407"},"glyph":{"id":"9432"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9433"},"view":{"id":"9435"}},"id":"9434","type":"GlyphRenderer"},{"attributes":{},"id":"9443","type":"Selection"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9441"},"major_label_policy":{"id":"9442"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9425"}},"id":"9424","type":"LinearAxis"},{"attributes":{"axis":{"id":"9420"},"ticker":null,"visible":false},"id":"9423","type":"Grid"},{"attributes":{},"id":"9444","type":"UnionRenderers"},{"attributes":{"axis":{"id":"9424"},"dimension":1,"ticker":null,"visible":false},"id":"9427","type":"Grid"},{"attributes":{},"id":"9425","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"CKuxhEUWkECkjSPWAg+QQO6vHvftC5BAGRu62c8IkEA+kpIedgaQQCwQPSmzApBAsg+yLNj7j0BZpl8ijkWQQJp4B3iyQJBAqP3WTlQ9kEDkuinlBTqQQK+XpgiAN5BAHo1D/Y4zkECmY84zhi6QQKfOo+KPd5BACjGXVF1ykECpE9BEiGuQQEPmyqA6a5BA/psXJ45okEAPCkrRamSQQHK/Q1EgX5BAFtukopGpkEB56SYxCKSQQJYKKqouoJBAVg+Yh2yckEBbC7PQnpmQQBCwVu2akZBAPxu5brqPkECBP/z8p9uQQOihtg2z1ZBAj6Z6Mv/NkEBDy7p/nM2QQNleC3qvypBAD0JAvkTCkEAtW+uLVMCQQDsA4q6+DZFAV1pG6l0HkUAmqUwxN/+QQIXukjjL/pBAJvxSP7/3kEDt72yP7vKQQPq2YKnu8JBAzTy5ptA/kUAF/BpJEjWRQKVmD7RyMJFAxxFr8fkvkUBOQX42oiiRQO2BVmCYI5FAxxLWxoghkUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9443"},"selection_policy":{"id":"9444"}},"id":"9407","type":"ColumnDataSource"}],"root_ids":["9409"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"2b170ff8-bc58-4f00-a487-47a1d861ecfc","root_ids":["9409"],"roots":{"9409":"a1d29aed-65d1-446f-b083-f85778d4d23e"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"639531ca-cc5a-43b6-9691-72e32c64d1a1":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9476","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9462"},"dimension":1,"ticker":null,"visible":false},"id":"9465","type":"Grid"},{"attributes":{},"id":"9463","type":"BasicTicker"},{"attributes":{},"id":"9477","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9446","type":"LinearColorMapper"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9466","type":"HoverTool"},{"attributes":{"source":{"id":"9445"}},"id":"9473","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9466"}]},"id":"9467","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9446"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9471","type":"Rect"},{"attributes":{"text":"Hamilton \\u2192 Milwaukee"},"id":"9448","type":"Title"},{"attributes":{},"id":"9480","type":"AllLabels"},{"attributes":{"data":{"val":{"__ndarray__":"46WbxKD+hUDjpZvEoP6FQOOlm8Sg/oVA46WbxKD+hUDjpZvEoP6FQOOlm8Sg/oVAiB7n7MMkhkAzMzMz80aGQDMzMzPzRoZAMzMzM/NGhkAzMzMz80aGQDMzMzPzRoZAMzMzM/NGhkB/csqS32+GQIPAyqFFj4ZAg8DKoUWPhkCDwMqhRY+GQIPAyqFFj4ZAg8DKoUWPhkCDwMqhRY+GQHfGrTj7uoZA001iEJjXhkDTTWIQmNeGQNNNYhCY14ZA001iEJjXhkDTTWIQmNeGQNNNYhCY14ZAbxqR3hYGh0Aj2/l+6h+HQCPb+X7qH4dAI9v5fuofh0Aj2/l+6h+HQCPb+X7qH4dAI9v5fuofh0BnbnSEMlGHQHNoke08aIdAc2iR7Txoh0BzaJHtPGiHQHNoke08aIdAc2iR7Txoh0BzaJHtPGiHQF/CVypOnIdAw/UoXI+wh0DD9Shcj7CHQMP1KFyPsIdAw/UoXI+wh0DD9Shcj7CHQMP1KFyPsIdAVxY70Gnnh0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9481"},"selection_policy":{"id":"9482"}},"id":"9445","type":"ColumnDataSource"},{"attributes":{},"id":"9479","type":"BasicTickFormatter"},{"attributes":{},"id":"9481","type":"Selection"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9446"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9470","type":"Rect"},{"attributes":{},"id":"9454","type":"LinearScale"},{"attributes":{"data_source":{"id":"9445"},"glyph":{"id":"9470"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9471"},"view":{"id":"9473"}},"id":"9472","type":"GlyphRenderer"},{"attributes":{"end":6},"id":"9452","type":"Range1d"},{"attributes":{},"id":"9456","type":"LinearScale"},{"attributes":{},"id":"9482","type":"UnionRenderers"},{"attributes":{},"id":"9459","type":"BasicTicker"},{"attributes":{"end":6},"id":"9450","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9476"},"major_label_policy":{"id":"9477"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9459"}},"id":"9458","type":"LinearAxis"},{"attributes":{"below":[{"id":"9458"}],"center":[{"id":"9461"},{"id":"9465"}],"height":400,"left":[{"id":"9462"}],"renderers":[{"id":"9472"}],"title":{"id":"9448"},"toolbar":{"id":"9467"},"toolbar_location":null,"width":400,"x_range":{"id":"9450"},"x_scale":{"id":"9454"},"y_range":{"id":"9452"},"y_scale":{"id":"9456"}},"id":"9447","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9479"},"major_label_policy":{"id":"9480"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9463"}},"id":"9462","type":"LinearAxis"},{"attributes":{"axis":{"id":"9458"},"ticker":null,"visible":false},"id":"9461","type":"Grid"}],"root_ids":["9447"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"639531ca-cc5a-43b6-9691-72e32c64d1a1","root_ids":["9447"],"roots":{"9447":"6f8143ef-01f1-4d9c-aa6f-78f99491ee7c"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"7d1137d9-85b2-4592-9373-d3f1bfc070ce":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"9500"},"dimension":1,"ticker":null,"visible":false},"id":"9503","type":"Grid"},{"attributes":{},"id":"9501","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9484"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9509","type":"Rect"},{"attributes":{},"id":"9515","type":"AllLabels"},{"attributes":{"text":"Hamilton \\u2192 Montreal"},"id":"9486","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9504","type":"HoverTool"},{"attributes":{},"id":"9492","type":"LinearScale"},{"attributes":{"source":{"id":"9483"}},"id":"9511","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9484"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9508","type":"Rect"},{"attributes":{"active_multi":null,"tools":[{"id":"9504"}]},"id":"9505","type":"Toolbar"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9484","type":"LinearColorMapper"},{"attributes":{"end":6},"id":"9490","type":"Range1d"},{"attributes":{"below":[{"id":"9496"}],"center":[{"id":"9499"},{"id":"9503"}],"height":400,"left":[{"id":"9500"}],"renderers":[{"id":"9510"}],"title":{"id":"9486"},"toolbar":{"id":"9505"},"toolbar_location":null,"width":400,"x_range":{"id":"9488"},"x_scale":{"id":"9492"},"y_range":{"id":"9490"},"y_scale":{"id":"9494"}},"id":"9485","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9519","type":"Selection"},{"attributes":{},"id":"9494","type":"LinearScale"},{"attributes":{},"id":"9497","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9483"},"glyph":{"id":"9508"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9509"},"view":{"id":"9511"}},"id":"9510","type":"GlyphRenderer"},{"attributes":{},"id":"9517","type":"BasicTickFormatter"},{"attributes":{},"id":"9520","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9488","type":"Range1d"},{"attributes":{},"id":"9518","type":"AllLabels"},{"attributes":{"data":{"val":{"__ndarray__":"nH6apOPxf0BFI0SeKdl/QPV8crlG939AQIPy4zQGgEAs2negeQ2AQEehdgkoBYBAr/g8Nb0CgEDfsCPEmzWAQGj+PR3EL4BAsXp2rzk4gECc6+pEaEOAQMUL2MToSoBA/xVDgy5CgECdO7DSgz+AQGpAzkVNcoBAX/MFiA1sgECe76fGy3SAQPhT46WbgIBAV6lF6VeIgEC+HgL9NH+AQIp+I3BKfIBAEPeihzungEBPVNvyVqiAQItk2d1dsYBAiCjLtc29gEBogpfPyMWAQHaTznY7vIBAeMGWDRG5gEDLW7+qpOOAQLNpW4Pd7IBA6Nms+hz2gEBM8m0L4PqAQPdqkf5IA4FALwib8EH5gEBmBAqr1/WAQATaZ99mKIFAxSCwcngpgUC6sH/oAzOBQBC8EGHyN4FAjOd9LclAgUDnfGdqSDaBQFNHfUieMoFADbykewdlgUDW1wRiE2aBQIbzX9bqb4FA1IWztgR1gUAb0HdcSX6BQKaFJuROc4FAQYrw5WRvgUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9519"},"selection_policy":{"id":"9520"}},"id":"9483","type":"ColumnDataSource"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9514"},"major_label_policy":{"id":"9515"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9497"}},"id":"9496","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9517"},"major_label_policy":{"id":"9518"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9501"}},"id":"9500","type":"LinearAxis"},{"attributes":{"axis":{"id":"9496"},"ticker":null,"visible":false},"id":"9499","type":"Grid"},{"attributes":{},"id":"9514","type":"BasicTickFormatter"}],"root_ids":["9485"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"7d1137d9-85b2-4592-9373-d3f1bfc070ce","root_ids":["9485"],"roots":{"9485":"3f96c517-c6ae-45cf-8533-24f1680fb70c"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"85b13f74-5359-4577-a03e-a0400530d39d":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9553","type":"AllLabels"},{"attributes":{"text":"Hamilton \\u2192 Thunder Bay"},"id":"9524","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9542","type":"HoverTool"},{"attributes":{},"id":"9530","type":"LinearScale"},{"attributes":{"source":{"id":"9521"}},"id":"9549","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9542"}]},"id":"9543","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9522"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9547","type":"Rect"},{"attributes":{"end":6},"id":"9528","type":"Range1d"},{"attributes":{},"id":"9532","type":"LinearScale"},{"attributes":{},"id":"9555","type":"BasicTickFormatter"},{"attributes":{},"id":"9535","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9521"},"glyph":{"id":"9546"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9547"},"view":{"id":"9549"}},"id":"9548","type":"GlyphRenderer"},{"attributes":{},"id":"9558","type":"UnionRenderers"},{"attributes":{},"id":"9557","type":"Selection"},{"attributes":{},"id":"9556","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9522"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9546","type":"Rect"},{"attributes":{"end":6},"id":"9526","type":"Range1d"},{"attributes":{"below":[{"id":"9534"}],"center":[{"id":"9537"},{"id":"9541"}],"height":400,"left":[{"id":"9538"}],"renderers":[{"id":"9548"}],"title":{"id":"9524"},"toolbar":{"id":"9543"},"toolbar_location":null,"width":400,"x_range":{"id":"9526"},"x_scale":{"id":"9530"},"y_range":{"id":"9528"},"y_scale":{"id":"9532"}},"id":"9523","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9522","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9552"},"major_label_policy":{"id":"9553"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9535"}},"id":"9534","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9555"},"major_label_policy":{"id":"9556"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9539"}},"id":"9538","type":"LinearAxis"},{"attributes":{"axis":{"id":"9534"},"ticker":null,"visible":false},"id":"9537","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"TdnpB5VukUAkQiPY2HeRQL1w58KIeJFAuCHGa75mkUA+eO3SdnqRQBrba0FvdJFA2ht8YUKLkUDN59zt6qeRQPsD5bYtqZFAdZKtLreckUDD9ShcT5eRQOyKGeEtrJFAFy1A28qlkUAHB3sTI76RQC4e3nMg2ZFA8parH/vRkUCVZYhjXc2RQM3Ji0zgx5FAmZ1F7+TdkUATfxR1JteRQBMOvcUD8ZFAbXAi+lUKkkCkVS3pSPyRQFCLwcPU9ZFA+YGrPHH4kUBolC79mw+SQDG1pQ6CCJJAHhX/d+QjkkBENSVZNyqSQERq2sXULJJAQmDl0CImkkAEVg4tAimSQBanWgtTQZJALQd6qN05kkAqHEEqxVaSQCL+YUvPTpJAjC0EOXhdkkAzNQnecFaSQA8qcR2TWZJAw7mGGQpzkkApWU5COWuSQDYjg9yliZJAO8eA7JV+kkAO9FDbNoOSQCQKLeu+hpJAO+KQDSSKkkCSsG8nwaSSQEeP39uUnJJAQSrFjoa8kkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9557"},"selection_policy":{"id":"9558"}},"id":"9521","type":"ColumnDataSource"},{"attributes":{},"id":"9552","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9538"},"dimension":1,"ticker":null,"visible":false},"id":"9541","type":"Grid"},{"attributes":{},"id":"9539","type":"BasicTicker"}],"root_ids":["9523"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"85b13f74-5359-4577-a03e-a0400530d39d","root_ids":["9523"],"roots":{"9523":"389c0b4c-8c2d-4001-9c42-93fde7244311"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"5904a2ae-e206-493c-8800-d48ac45b9750":{"defs":[],"roots":{"references":[{"attributes":{"text":"Hamilton \\u2192 Toledo"},"id":"9562","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9580","type":"HoverTool"},{"attributes":{},"id":"9568","type":"LinearScale"},{"attributes":{"source":{"id":"9559"}},"id":"9587","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9580"}]},"id":"9581","type":"Toolbar"},{"attributes":{},"id":"9596","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9566","type":"Range1d"},{"attributes":{},"id":"9570","type":"LinearScale"},{"attributes":{},"id":"9573","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9559"},"glyph":{"id":"9584"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9585"},"view":{"id":"9587"}},"id":"9586","type":"GlyphRenderer"},{"attributes":{},"id":"9593","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9560"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9584","type":"Rect"},{"attributes":{"below":[{"id":"9572"}],"center":[{"id":"9575"},{"id":"9579"}],"height":400,"left":[{"id":"9576"}],"renderers":[{"id":"9586"}],"title":{"id":"9562"},"toolbar":{"id":"9581"},"toolbar_location":null,"width":400,"x_range":{"id":"9564"},"x_scale":{"id":"9568"},"y_range":{"id":"9566"},"y_scale":{"id":"9570"}},"id":"9561","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"9564","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9560","type":"LinearColorMapper"},{"attributes":{},"id":"9594","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9590"},"major_label_policy":{"id":"9591"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9573"}},"id":"9572","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9593"},"major_label_policy":{"id":"9594"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9577"}},"id":"9576","type":"LinearAxis"},{"attributes":{"axis":{"id":"9572"},"ticker":null,"visible":false},"id":"9575","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"ZWE+D2T0dEDgn1IlKvF0QKRwPQoXH3VAxRYnYyE7dUD49H3dbkJ1QHJNJhO8XXVAK0NmeP2IdUAywbo7nEF1QFep6i8lPnVAUrgehQtvdUAaTdMMDmR1QObXxSMnlXVAhetRuL6ydUAe+L3yJeF1QAxJHGjUjnVAwIqdOiCLdUAAAAAAAL91QFIkBFCRs3VA4eLyad/ndUCZiX1dwQd2QAOFMG1OOXZA2aiYlAzcdUApbFBFG9h1QK5H4Xr0DnZAwOOAAjQxdkDPxTqwlzp2QBjx+FGoXHZA9jmI53aRdkCmCBXBRCl2QJJNA1AWJXZAXI/C9ehedkAK5p5kQYN2QLyogvZPjXZAcCKf/IKxdkDbxvphn+l2QHNoke18dnZACVebWhFydkAK16Nw3a52QEbA18ZO1XZAqovKPAjgdkDHU0WnXQZ3QM57UtzHQXdAQMgNGrXDdkByOE5lDL92QLgehevR/nZAj8L1KFwnd0CYbhKDwDJ3QB+F61E4W3dAswjFVvCZd0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9595"},"selection_policy":{"id":"9596"}},"id":"9559","type":"ColumnDataSource"},{"attributes":{},"id":"9590","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9576"},"dimension":1,"ticker":null,"visible":false},"id":"9579","type":"Grid"},{"attributes":{},"id":"9577","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9560"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9585","type":"Rect"},{"attributes":{},"id":"9591","type":"AllLabels"},{"attributes":{},"id":"9595","type":"Selection"}],"root_ids":["9561"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"5904a2ae-e206-493c-8800-d48ac45b9750","root_ids":["9561"],"roots":{"9561":"0bc9e012-3094-4cc6-b093-b5de175404c9"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"241429f2-c503-4e7a-a11c-3c47aa8d896b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9615","type":"BasicTicker"},{"attributes":{},"id":"9629","type":"AllLabels"},{"attributes":{},"id":"9633","type":"Selection"},{"attributes":{"text":"Hamilton \\u2192 Toronto"},"id":"9600","type":"Title"},{"attributes":{"source":{"id":"9597"}},"id":"9625","type":"CDSView"},{"attributes":{},"id":"9606","type":"LinearScale"},{"attributes":{"data":{"val":{"__ndarray__":"VviOdcxzWkAodKjwMflZQMCDVavl2FtApgRpa2ktXUDwaU5e5KVeQI0vNZ34Zl9AhHsKJbgrYECsEQvG0upaQE5aXfPPaVpA5OznXnFoXEAU3i+wWNNdQG71QTtMZV9Aa9WuCekYYEArYbcZ+JhgQAIrhxbZYVtAdEAS9m3aWkDSteUS/fdcQIK39vRHeV5AdsAaDFoSYEAqY43EVX5gQLf2mQ44BmFAWEQDZ9/YW0BlhjL5C0tbQMB+48aIh11AuvAoOjcfX0BP1l76DXJgQOrwa3/C42BAXdxGA3hzYUCuXX+35U9cQIts5/upu1tArkfhehQXXkAoyu9+JsVfQDmi1o/onmBAjy6AOi9JYUAEwvP3t+BhQM/WZgjsxlxAsVKc/kcsXECcEN8uoKZeQJzU4TI4/19AnoCBe3n7YEBOvF71m65hQJBX1uz3TWJAJfDiWPI9XUCimLwB5pxcQKRwPQrXzV5AOp0aHjFPYEAer/ZmClhhQA1KPbAIFGJANz2D4Te7YkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9633"},"selection_policy":{"id":"9634"}},"id":"9597","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9598"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9623","type":"Rect"},{"attributes":{},"id":"9634","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9604","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9628"},"major_label_policy":{"id":"9629"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9611"}},"id":"9610","type":"LinearAxis"},{"attributes":{"axis":{"id":"9610"},"ticker":null,"visible":false},"id":"9613","type":"Grid"},{"attributes":{},"id":"9631","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"9618"}]},"id":"9619","type":"Toolbar"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9598","type":"LinearColorMapper"},{"attributes":{},"id":"9608","type":"LinearScale"},{"attributes":{"end":6},"id":"9602","type":"Range1d"},{"attributes":{"data_source":{"id":"9597"},"glyph":{"id":"9622"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9623"},"view":{"id":"9625"}},"id":"9624","type":"GlyphRenderer"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9631"},"major_label_policy":{"id":"9632"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9615"}},"id":"9614","type":"LinearAxis"},{"attributes":{},"id":"9611","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9598"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9622","type":"Rect"},{"attributes":{"below":[{"id":"9610"}],"center":[{"id":"9613"},{"id":"9617"}],"height":400,"left":[{"id":"9614"}],"renderers":[{"id":"9624"}],"title":{"id":"9600"},"toolbar":{"id":"9619"},"toolbar_location":null,"width":400,"x_range":{"id":"9602"},"x_scale":{"id":"9606"},"y_range":{"id":"9604"},"y_scale":{"id":"9608"}},"id":"9599","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9632","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9618","type":"HoverTool"},{"attributes":{"axis":{"id":"9614"},"dimension":1,"ticker":null,"visible":false},"id":"9617","type":"Grid"},{"attributes":{},"id":"9628","type":"BasicTickFormatter"}],"root_ids":["9599"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"241429f2-c503-4e7a-a11c-3c47aa8d896b","root_ids":["9599"],"roots":{"9599":"927b67b2-46ec-470f-ae1b-f1d87759cb71"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"8b140539-669f-4cec-854e-4ea4f77e187f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9671","type":"Selection"},{"attributes":{},"id":"9644","type":"LinearScale"},{"attributes":{"data_source":{"id":"9635"},"glyph":{"id":"9660"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9661"},"view":{"id":"9663"}},"id":"9662","type":"GlyphRenderer"},{"attributes":{"end":6},"id":"9642","type":"Range1d"},{"attributes":{"text":"Hamilton \\u2192 Windsor"},"id":"9638","type":"Title"},{"attributes":{"source":{"id":"9635"}},"id":"9663","type":"CDSView"},{"attributes":{},"id":"9649","type":"BasicTicker"},{"attributes":{},"id":"9653","type":"BasicTicker"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9656","type":"HoverTool"},{"attributes":{},"id":"9670","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9636"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9661","type":"Rect"},{"attributes":{"end":6},"id":"9640","type":"Range1d"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9669"},"major_label_policy":{"id":"9670"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9653"}},"id":"9652","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"LsSP1n1BcECR7Xw/NSBwQB4u3jRiD3BANOkA0mhJcECsHFpku7FwQIPAyqFF2nBAneYu0+AqcUCF9MqriXlwQM3MzMxMVnBA0xHAzUJEcEAaOPtePoJwQGeB0UDn8XBALGUZ4lgdcUCvWdNh6nNxQN0kBoGVsXBACKwcWmSMcEB7zbxmI3lwQA6v2usTu3BAFb5jHRMycUDVCWgibGBxQLOkkvDzvHFANVVBVqHpcEBEi2zne8JwQDGxnv8DrnBA9P3UeOnzcEDRItv5PnJxQH2utmJ/o3FAxBc3f/0FckCNhXwrrSFxQH9qvHST+HBA5pSAmOTicEDaTM8FvyxxQIyHUtZqsnFAJlMFo5LmcUDWitsNB09yQOS1twC5WXFAukkMAqsucUCOUH0xxRdxQM3DrpKUZXFAOsTkspbycUDP91PjpSlyQNrVmpwQmHJAPOby1cSRcUD2KFyPwmRxQEM0X8qlTHFAsxKpH2qecUD2KFyPwjJyQHicoiO5bHJA60g/KxrhckA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9671"},"selection_policy":{"id":"9672"}},"id":"9635","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"9648"},"ticker":null,"visible":false},"id":"9651","type":"Grid"},{"attributes":{},"id":"9669","type":"BasicTickFormatter"},{"attributes":{},"id":"9667","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"9656"}]},"id":"9657","type":"Toolbar"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9636","type":"LinearColorMapper"},{"attributes":{"below":[{"id":"9648"}],"center":[{"id":"9651"},{"id":"9655"}],"height":400,"left":[{"id":"9652"}],"renderers":[{"id":"9662"}],"title":{"id":"9638"},"toolbar":{"id":"9657"},"toolbar_location":null,"width":400,"x_range":{"id":"9640"},"x_scale":{"id":"9644"},"y_range":{"id":"9642"},"y_scale":{"id":"9646"}},"id":"9637","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9636"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9660","type":"Rect"},{"attributes":{},"id":"9646","type":"LinearScale"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9666"},"major_label_policy":{"id":"9667"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9649"}},"id":"9648","type":"LinearAxis"},{"attributes":{},"id":"9666","type":"BasicTickFormatter"},{"attributes":{},"id":"9672","type":"UnionRenderers"},{"attributes":{"axis":{"id":"9652"},"dimension":1,"ticker":null,"visible":false},"id":"9655","type":"Grid"}],"root_ids":["9637"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"8b140539-669f-4cec-854e-4ea4f77e187f","root_ids":["9637"],"roots":{"9637":"90f139e9-9d3b-4ab2-9f9f-0f9ac5b2e44b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"3f9eb162-c203-43df-b731-48b1d811fc97":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9710","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9678","type":"Range1d"},{"attributes":{},"id":"9707","type":"BasicTickFormatter"},{"attributes":{},"id":"9682","type":"LinearScale"},{"attributes":{},"id":"9704","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"9673"}},"id":"9701","type":"CDSView"},{"attributes":{},"id":"9687","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9674"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9698","type":"Rect"},{"attributes":{},"id":"9708","type":"AllLabels"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9707"},"major_label_policy":{"id":"9708"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9691"}},"id":"9690","type":"LinearAxis"},{"attributes":{"end":6},"id":"9680","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9674"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9699","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9694","type":"HoverTool"},{"attributes":{},"id":"9705","type":"AllLabels"},{"attributes":{},"id":"9691","type":"BasicTicker"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9704"},"major_label_policy":{"id":"9705"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9687"}},"id":"9686","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"07VAzK/TYkDEVnX7Uc9iQFXf+UWJr2JAxM4UOq+JYkDRkVz+w15iQFozjYHQzGJA3YAqyVV8Y0DBCTt7XSpjQIdiPJQyJWNADiuBOZ8CY0A9m1Wfq9liQClcj8I1q2JAmRwtvWwhY0AH1sy1w91jQLBdNSoLgWNA9UXnoduJY0DHdggttVVjQETdByC1KWNAgSbChqf3YkDYBc34CHZjQBbbpKIxP2RAnrEv2bjXY0AFniBWpOBjQIDCjyDLqGNASx+6oL55Y0DY8PRKGURjQPyeojSlymNAQDBHj5+gZECNBSqIZi5kQBb2WQptN2RAOQ4XFOH7Y0BSYWwhyMljQDC7Jw+LkGNAO4hCcEEfZEBPNR98DQJlQHxZJDcUhWRAJk6TvjWOZEDKT6p9+k5kQFmjHqLRGWRAiIVa0/zcY0B6ceKr3XNkQHmKwWh7Y2VAT11U5sHbZEA2psxy/uRkQG2P3nAfomRAYOXQIttpZEDfT42XbilkQJ4KuOd5yGRAo99jVenEZUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9709"},"selection_policy":{"id":"9710"}},"id":"9673","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9673"},"glyph":{"id":"9698"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9699"},"view":{"id":"9701"}},"id":"9700","type":"GlyphRenderer"},{"attributes":{},"id":"9684","type":"LinearScale"},{"attributes":{"axis":{"id":"9686"},"ticker":null,"visible":false},"id":"9689","type":"Grid"},{"attributes":{"below":[{"id":"9686"}],"center":[{"id":"9689"},{"id":"9693"}],"height":400,"left":[{"id":"9690"}],"renderers":[{"id":"9700"}],"title":{"id":"9676"},"toolbar":{"id":"9695"},"toolbar_location":null,"width":400,"x_range":{"id":"9678"},"x_scale":{"id":"9682"},"y_range":{"id":"9680"},"y_scale":{"id":"9684"}},"id":"9675","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"9694"}]},"id":"9695","type":"Toolbar"},{"attributes":{},"id":"9709","type":"Selection"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9674","type":"LinearColorMapper"},{"attributes":{"text":"Milwaukee \\u2192 Chicago"},"id":"9676","type":"Title"},{"attributes":{"axis":{"id":"9690"},"dimension":1,"ticker":null,"visible":false},"id":"9693","type":"Grid"}],"root_ids":["9675"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"3f9eb162-c203-43df-b731-48b1d811fc97","root_ids":["9675"],"roots":{"9675":"554ced34-2d04-4d00-9b77-a7518d39e047"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"146e54a1-14e1-418c-aaaa-266561bb7353":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"9711"}},"id":"9739","type":"CDSView"},{"attributes":{"axis":{"id":"9724"},"ticker":null,"visible":false},"id":"9727","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9712"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9737","type":"Rect"},{"attributes":{},"id":"9725","type":"BasicTicker"},{"attributes":{},"id":"9748","type":"UnionRenderers"},{"attributes":{},"id":"9722","type":"LinearScale"},{"attributes":{},"id":"9745","type":"BasicTickFormatter"},{"attributes":{},"id":"9729","type":"BasicTicker"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9742"},"major_label_policy":{"id":"9743"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9725"}},"id":"9724","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9711"},"glyph":{"id":"9736"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9737"},"view":{"id":"9739"}},"id":"9738","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"9732"}]},"id":"9733","type":"Toolbar"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9712","type":"LinearColorMapper"},{"attributes":{},"id":"9746","type":"AllLabels"},{"attributes":{"end":6},"id":"9716","type":"Range1d"},{"attributes":{"text":"Milwaukee \\u2192 Cleveland"},"id":"9714","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9732","type":"HoverTool"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9712"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9736","type":"Rect"},{"attributes":{},"id":"9742","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9724"}],"center":[{"id":"9727"},{"id":"9731"}],"height":400,"left":[{"id":"9728"}],"renderers":[{"id":"9738"}],"title":{"id":"9714"},"toolbar":{"id":"9733"},"toolbar_location":null,"width":400,"x_range":{"id":"9716"},"x_scale":{"id":"9720"},"y_range":{"id":"9718"},"y_scale":{"id":"9722"}},"id":"9713","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"9718","type":"Range1d"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9745"},"major_label_policy":{"id":"9746"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9729"}},"id":"9728","type":"LinearAxis"},{"attributes":{},"id":"9720","type":"LinearScale"},{"attributes":{"data":{"val":{"__ndarray__":"D9w3rWqFgUCaAdMOtHyBQPVKWYZYdIFAekhCbKpmgUB8JqAut16BQDRvi+j9XYFAcF8HzplWgUDdVVklMsKBQK1OzlCMxoFAaJHtfK+vgUD61XfZCqGBQBFpwMV/mIFA9vu0QMGXgUAlBoGVA5CBQKrPep35/oFAVkTyOmcDgkDc14FzBuuBQHTPukZr24FAflk1Y1zSgUC3iN6YhNGBQNqs+lxtyYFAft2OFcE7gkDk4ZjAaECCQE8eFmpdJoJA9Vzws8sVgkCOqPUjOgyCQHgVCPFHC4JAj1N0JNcCgkBLV7CNiHiCQOBVxQptfYJAw2SqYLRhgkB16iUhLFCCQJ73teQXRoJAQDYkSQtFgkBE+u3rQDyCQB9lxAVQtYJA3MnxVHG6gkAvbqMBDJ2CQO/jaI6MioJAtdpopfV/gkABw02hzn6CQPmgZ7OqdYJA7d7lfRfygkDZPR6fdfeCQIts5/tp2IJAVkrP9LLWgkDFKSlm07mCQMNPd/mRuIJArkfhehSvgkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9747"},"selection_policy":{"id":"9748"}},"id":"9711","type":"ColumnDataSource"},{"attributes":{},"id":"9743","type":"AllLabels"},{"attributes":{},"id":"9747","type":"Selection"},{"attributes":{"axis":{"id":"9728"},"dimension":1,"ticker":null,"visible":false},"id":"9731","type":"Grid"}],"root_ids":["9713"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"146e54a1-14e1-418c-aaaa-266561bb7353","root_ids":["9713"],"roots":{"9713":"1f05b586-218d-446d-bf12-74c684e8d167"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"1cc00ebb-85bb-4644-9a35-c2d0c1767347":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"9749"},"glyph":{"id":"9774"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9775"},"view":{"id":"9777"}},"id":"9776","type":"GlyphRenderer"},{"attributes":{},"id":"9783","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9780"},"major_label_policy":{"id":"9781"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9763"}},"id":"9762","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9783"},"major_label_policy":{"id":"9784"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9767"}},"id":"9766","type":"LinearAxis"},{"attributes":{"axis":{"id":"9762"},"ticker":null,"visible":false},"id":"9765","type":"Grid"},{"attributes":{},"id":"9784","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"9770"}]},"id":"9771","type":"Toolbar"},{"attributes":{"axis":{"id":"9766"},"dimension":1,"ticker":null,"visible":false},"id":"9769","type":"Grid"},{"attributes":{},"id":"9767","type":"BasicTicker"},{"attributes":{"source":{"id":"9749"}},"id":"9777","type":"CDSView"},{"attributes":{},"id":"9780","type":"BasicTickFormatter"},{"attributes":{"text":"Milwaukee \\u2192 Detroit"},"id":"9752","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9770","type":"HoverTool"},{"attributes":{"data":{"val":{"__ndarray__":"bv8lBEa0fUCAAc6cX6h9QCrwBLFip31AHUdiOM2GfUB21OKdbXB9QEPMgA6OSn1A4atnUvQ3fUBLK3QUdh5+QH8jy5PVEX5A9p26TVPzfUB3ZRcMju99QH8jy5PVs31AlQuVf42vfUD5MHvZ9pt9QBsv3SSmiH5Af0XIikt7fkCCfpUyf1p+QA2O7RD6Mn5AeRrVjocYfkAyhoPONe99QB7ec2D5/31A6jJGNdbyfkDLNiZ6j8F+QBuHVRerwX5ADMwKRVqYfkBm6fmJOX1+QGPPQxLiUX5ARIts5/tjfkC6Nq9FBl1/QPcrU4KUKH9AeoPUknMAf0AYMg15uv1+QFK4HoXr4X5AkxgEVo60fkBpOGVu/sd+QJdi/VU2x39AFfmaipmPf0C8HBsmX2V/QBZwKq0aY39A2YcGc6UZf0DEYcSZOhd/QI7lXfUALH9AUrgehQsIgEAzxuKSnvZ/QP21YblKyn9AtaUO8rqYf0C3JKwy+Ht/QPWqhN3meX9ApmpxfAOQf0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9785"},"selection_policy":{"id":"9786"}},"id":"9749","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9750"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9775","type":"Rect"},{"attributes":{},"id":"9758","type":"LinearScale"},{"attributes":{},"id":"9781","type":"AllLabels"},{"attributes":{"end":6},"id":"9756","type":"Range1d"},{"attributes":{},"id":"9785","type":"Selection"},{"attributes":{},"id":"9760","type":"LinearScale"},{"attributes":{},"id":"9763","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9750"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9774","type":"Rect"},{"attributes":{"below":[{"id":"9762"}],"center":[{"id":"9765"},{"id":"9769"}],"height":400,"left":[{"id":"9766"}],"renderers":[{"id":"9776"}],"title":{"id":"9752"},"toolbar":{"id":"9771"},"toolbar_location":null,"width":400,"x_range":{"id":"9754"},"x_scale":{"id":"9758"},"y_range":{"id":"9756"},"y_scale":{"id":"9760"}},"id":"9751","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9786","type":"UnionRenderers"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9750","type":"LinearColorMapper"},{"attributes":{"end":6},"id":"9754","type":"Range1d"}],"root_ids":["9751"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"1cc00ebb-85bb-4644-9a35-c2d0c1767347","root_ids":["9751"],"roots":{"9751":"7b30c04d-3316-4ee6-9b6e-23feb7fef4d8"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"4435346f-f25d-4eab-81ef-7da5ac455d13":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9821","type":"BasicTickFormatter"},{"attributes":{},"id":"9823","type":"Selection"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9821"},"major_label_policy":{"id":"9822"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9805"}},"id":"9804","type":"LinearAxis"},{"attributes":{},"id":"9824","type":"UnionRenderers"},{"attributes":{},"id":"9822","type":"AllLabels"},{"attributes":{"axis":{"id":"9804"},"dimension":1,"ticker":null,"visible":false},"id":"9807","type":"Grid"},{"attributes":{"data_source":{"id":"9787"},"glyph":{"id":"9812"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9813"},"view":{"id":"9815"}},"id":"9814","type":"GlyphRenderer"},{"attributes":{},"id":"9805","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"oIPTJ17ffECHv8uxodR8QBZqTfOOyXxANE6eDVStfECk4v+OKNZ8QG1GvCtxAH1AFRkdkAQnfUCp6Wl2Mz99QLq2XKK/M31ArSx2oNMnfUC0wGiggwl9QPESnPpgNX1ASmnsAclifUA73/TTJIx9QLFPAMUIn31A7q3tkt2SfUBRF4RNGIZ9QDMzMzOzZX1APUM4ZpmUfUA1tAHYIMV9QGClzBdF8X1AurWWE97+fUAUfZmD+/F9QOjZrPpc5H1As6X9xeLBfUCKc9TR0fN9QBPXMa54J35AhWukW2VWfkC180dis15+QEh0KnQZUX5Af5zVp6FCfkAyGMhYEh5+QNejcD0KU35A/iFHhNCJfkCqMXyfhbt+QL1Z3rCIvn5Ae2u7ZDewfkAjh+NU5qB+QLKKkutBen5AJNQMqUKyfkDbRHdaKOx+QM/3U+OlIH9Axb90/10ef0CvYkxVVQ9/QLpJDAIr/35APiVCfnHWfkBxBKkUexF/QMaPjDCATn9A9L0rJ8aFf0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9823"},"selection_policy":{"id":"9824"}},"id":"9787","type":"ColumnDataSource"},{"attributes":{"text":"Milwaukee \\u2192 Duluth"},"id":"9790","type":"Title"},{"attributes":{},"id":"9796","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9808","type":"HoverTool"},{"attributes":{"source":{"id":"9787"}},"id":"9815","type":"CDSView"},{"attributes":{},"id":"9819","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"9808"}]},"id":"9809","type":"Toolbar"},{"attributes":{"end":6},"id":"9794","type":"Range1d"},{"attributes":{},"id":"9798","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9788"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9813","type":"Rect"},{"attributes":{"axis":{"id":"9800"},"ticker":null,"visible":false},"id":"9803","type":"Grid"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9788"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9812","type":"Rect"},{"attributes":{"end":6},"id":"9792","type":"Range1d"},{"attributes":{},"id":"9818","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9800"}],"center":[{"id":"9803"},{"id":"9807"}],"height":400,"left":[{"id":"9804"}],"renderers":[{"id":"9814"}],"title":{"id":"9790"},"toolbar":{"id":"9809"},"toolbar_location":null,"width":400,"x_range":{"id":"9792"},"x_scale":{"id":"9796"},"y_range":{"id":"9794"},"y_scale":{"id":"9798"}},"id":"9789","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9801","type":"BasicTicker"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9788","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9818"},"major_label_policy":{"id":"9819"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9801"}},"id":"9800","type":"LinearAxis"}],"root_ids":["9789"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"4435346f-f25d-4eab-81ef-7da5ac455d13","root_ids":["9789"],"roots":{"9789":"ac71803b-765d-417e-a853-7a58883e8159"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"536e0404-5c92-481b-af9c-67f0a7a284fe":{"defs":[],"roots":{"references":[{"attributes":{},"id":"9860","type":"AllLabels"},{"attributes":{},"id":"9862","type":"UnionRenderers"},{"attributes":{"end":6},"id":"9830","type":"Range1d"},{"attributes":{},"id":"9859","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9856"},"major_label_policy":{"id":"9857"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9839"}},"id":"9838","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9859"},"major_label_policy":{"id":"9860"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9843"}},"id":"9842","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"gvHCjO9whkAshga9YmGGQEw3iUGgRIZAw32JHaIyhkB90LNZdSCGQLugGR8BDoZAiuTQx+H9hUB6KMBmr7uGQKzvshWKq4ZA16NwPSqNhkDoC2t0+HmGQEoMAiunZoZACI7LuJlThkCq+ktBzUKGQHjzr0BvBodAJcVsbrH1hkBiEFg5tNWGQA2aTMtOwYZAzO7JwwKthkBWe31SMpmGQMsQx7q4h4ZAd76fGi9Rh0ClLhnH2D+HQD0BXrBlHIdAMSguIqUIh0A8TtGRfPOGQKNoL+zK3oZA7CZCNKTMhkB1iY/07puHQCWYxR8AiodAGh5WE49kh0AGcdTAZU2HQKyt2F/2OYdA8VXhhWMkh0ANPb2tjxGHQHRUf86u5odApQFyeCfUh0D2Ok52uKyHQNZATvNZlIdAGw3gLXCAh0A+Q5Mf/GmHQDTnKid7VodAbIt8qG4xiEAlax7RTh6IQMzDU9nh9IdArKS6JU7bh0CLbOf76caHQIwwRbmUr4dAVf2loGabh0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9861"},"selection_policy":{"id":"9862"}},"id":"9825","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"9838"},"ticker":null,"visible":false},"id":"9841","type":"Grid"},{"attributes":{},"id":"9856","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9842"},"dimension":1,"ticker":null,"visible":false},"id":"9845","type":"Grid"},{"attributes":{},"id":"9843","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9826"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9851","type":"Rect"},{"attributes":{},"id":"9857","type":"AllLabels"},{"attributes":{"text":"Milwaukee \\u2192 Hamilton"},"id":"9828","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9846","type":"HoverTool"},{"attributes":{},"id":"9834","type":"LinearScale"},{"attributes":{"source":{"id":"9825"}},"id":"9853","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9826"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9850","type":"Rect"},{"attributes":{"active_multi":null,"tools":[{"id":"9846"}]},"id":"9847","type":"Toolbar"},{"attributes":{"below":[{"id":"9838"}],"center":[{"id":"9841"},{"id":"9845"}],"height":400,"left":[{"id":"9842"}],"renderers":[{"id":"9852"}],"title":{"id":"9828"},"toolbar":{"id":"9847"},"toolbar_location":null,"width":400,"x_range":{"id":"9830"},"x_scale":{"id":"9834"},"y_range":{"id":"9832"},"y_scale":{"id":"9836"}},"id":"9827","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"9832","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9826","type":"LinearColorMapper"},{"attributes":{},"id":"9861","type":"Selection"},{"attributes":{},"id":"9836","type":"LinearScale"},{"attributes":{},"id":"9839","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9825"},"glyph":{"id":"9850"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9851"},"view":{"id":"9853"}},"id":"9852","type":"GlyphRenderer"}],"root_ids":["9827"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"536e0404-5c92-481b-af9c-67f0a7a284fe","root_ids":["9827"],"roots":{"9827":"74e15540-0f98-45e2-98e7-ac274aa1fd10"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"048b9f26-8eb1-45d5-a3b1-0e8949e736bc":{"defs":[],"roots":{"references":[{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9864","type":"LinearColorMapper"},{"attributes":{"data":{"val":{"__ndarray__":"9wKzQgFIkUCRR3AjVTaRQJ+u7li8JZFA46WbxNA5kUABFvn1o0yRQC/dJAYBO5FA3+F2aAhNkUCkpl1MU0+RQBTP2QIiZJFA8tJNYtBSkUC8Wu7MxGeRQClcj8J1e5FAJjRJLPlokUAzi1BsVXyRQBzRPes6e5FAOXtntIVpkUBE96xr5H+RQLbz/dS4lZFAUaIlj0eqkUD8prBS8ZaRQGVQbXCiq5FAchdhiiKnkUBBgXfyyZSRQLn/yHT4rJFAj6hQ3azDkUBXBP9bGdmRQPT91HjpxJFAuvlGdO/akUDqQUEpCtORQEiHhzAOwJFACyQofgzakUCJQWDloPGRQIBKlSjrB5JA61T5nuHykUDsvmN4PAqSQGFsIcjx/pFAUI2XblLrkUBeSIeHIAeSQIPab+2UH5JAqJAr9bw2kkDBx2DF2SCSQEBoPXyJOZJAt7JEZ9kqkkBXk6eslhaSQB6ILNKUM5JAXI/C9YhNkkCu8gTCjmWSQLgehevRTpJAcy1agNZokkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9899"},"selection_policy":{"id":"9900"}},"id":"9863","type":"ColumnDataSource"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9894"},"major_label_policy":{"id":"9895"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9877"}},"id":"9876","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9897"},"major_label_policy":{"id":"9898"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9881"}},"id":"9880","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9864"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9888","type":"Rect"},{"attributes":{"axis":{"id":"9876"},"ticker":null,"visible":false},"id":"9879","type":"Grid"},{"attributes":{},"id":"9894","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9880"},"dimension":1,"ticker":null,"visible":false},"id":"9883","type":"Grid"},{"attributes":{},"id":"9881","type":"BasicTicker"},{"attributes":{},"id":"9895","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9884","type":"HoverTool"},{"attributes":{"source":{"id":"9863"}},"id":"9891","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9884"}]},"id":"9885","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9864"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9889","type":"Rect"},{"attributes":{"text":"Milwaukee \\u2192 Montreal"},"id":"9866","type":"Title"},{"attributes":{},"id":"9899","type":"Selection"},{"attributes":{},"id":"9897","type":"BasicTickFormatter"},{"attributes":{},"id":"9872","type":"LinearScale"},{"attributes":{"data_source":{"id":"9863"},"glyph":{"id":"9888"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9889"},"view":{"id":"9891"}},"id":"9890","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9876"}],"center":[{"id":"9879"},{"id":"9883"}],"height":400,"left":[{"id":"9880"}],"renderers":[{"id":"9890"}],"title":{"id":"9866"},"toolbar":{"id":"9885"},"toolbar_location":null,"width":400,"x_range":{"id":"9868"},"x_scale":{"id":"9872"},"y_range":{"id":"9870"},"y_scale":{"id":"9874"}},"id":"9865","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"9870","type":"Range1d"},{"attributes":{},"id":"9874","type":"LinearScale"},{"attributes":{},"id":"9900","type":"UnionRenderers"},{"attributes":{},"id":"9877","type":"BasicTicker"},{"attributes":{},"id":"9898","type":"AllLabels"},{"attributes":{"end":6},"id":"9868","type":"Range1d"}],"root_ids":["9865"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"048b9f26-8eb1-45d5-a3b1-0e8949e736bc","root_ids":["9865"],"roots":{"9865":"3d145ce6-db2f-466f-b31f-22d5db6ea0f2"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"1aa35bf8-61f4-4ad9-bb2d-0cf96503d9cb":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9932"},"major_label_policy":{"id":"9933"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9915"}},"id":"9914","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9935"},"major_label_policy":{"id":"9936"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9919"}},"id":"9918","type":"LinearAxis"},{"attributes":{"axis":{"id":"9914"},"ticker":null,"visible":false},"id":"9917","type":"Grid"},{"attributes":{},"id":"9932","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9918"},"dimension":1,"ticker":null,"visible":false},"id":"9921","type":"Grid"},{"attributes":{},"id":"9919","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9902"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9927","type":"Rect"},{"attributes":{},"id":"9933","type":"AllLabels"},{"attributes":{},"id":"9936","type":"AllLabels"},{"attributes":{"text":"Milwaukee \\u2192 Thunder Bay"},"id":"9904","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9922","type":"HoverTool"},{"attributes":{},"id":"9910","type":"LinearScale"},{"attributes":{"source":{"id":"9901"}},"id":"9929","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9902"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9926","type":"Rect"},{"attributes":{"active_multi":null,"tools":[{"id":"9922"}]},"id":"9923","type":"Toolbar"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9902","type":"LinearColorMapper"},{"attributes":{"end":6},"id":"9908","type":"Range1d"},{"attributes":{"below":[{"id":"9914"}],"center":[{"id":"9917"},{"id":"9921"}],"height":400,"left":[{"id":"9918"}],"renderers":[{"id":"9928"}],"title":{"id":"9904"},"toolbar":{"id":"9923"},"toolbar_location":null,"width":400,"x_range":{"id":"9906"},"x_scale":{"id":"9910"},"y_range":{"id":"9908"},"y_scale":{"id":"9912"}},"id":"9903","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"val":{"__ndarray__":"ptzYR0LPhkCp6cQv9s6GQLeXNEbr14ZA/P7Ni8O/hkC8O9ecOLCGQIofY+5ak4ZAbef7qbF3hkAI0bWKyR+HQKnpxC+GH4dASgwCKwcph0C4DJME/A6HQBTi2wVE/oZAgY01baDfhkCPwvUoPMKGQHFZhc1QcIdAqenELxZwh0DcgM8PI3qHQHquSn00XodAa4jgbk9Mh0BwZxXs5SuHQLKd76fGDIdA001iENjAh0Cp6cQvpsCHQG/1nPQ+y4dANrwP9myth0BnnyLicZqHQGfV52oreIdA1XjpJlFXh0A1Qj9TXxGIQKnpxC82EYhAAWpq2VociECyUYziu/eHQE1wRb2r6IdAXUO66XDEh0D4U+Ol26GHQJ7KDpbmYYhAqenEL8ZhiECU3je+dm2IQEq/M5DdRohAiOJEqg4yiEBNHZpothCIQBsv3SRm7IdAAL/r2G2yiECp6cQvVrKIQCZTBaOSvohA6cDNPf+ViEDFWWzuM4CIQESLbOf7XIhAPQrXo/A2iEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9937"},"selection_policy":{"id":"9938"}},"id":"9901","type":"ColumnDataSource"},{"attributes":{},"id":"9912","type":"LinearScale"},{"attributes":{},"id":"9915","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9901"},"glyph":{"id":"9926"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9927"},"view":{"id":"9929"}},"id":"9928","type":"GlyphRenderer"},{"attributes":{},"id":"9935","type":"BasicTickFormatter"},{"attributes":{},"id":"9938","type":"UnionRenderers"},{"attributes":{},"id":"9937","type":"Selection"},{"attributes":{"end":6},"id":"9906","type":"Range1d"}],"root_ids":["9903"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"1aa35bf8-61f4-4ad9-bb2d-0cf96503d9cb","root_ids":["9903"],"roots":{"9903":"1b1cdee7-40d6-41b5-827c-921fe51b91a9"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"c9b99c31-4956-4790-a589-0f40e0653520":{"defs":[],"roots":{"references":[{"attributes":{"data":{"val":{"__ndarray__":"wr0ybzXCekAw7UBCmcF6QJD3qpUJ1XpA40bbQqEGe0DR2+kYQe96QBd6aS8n9XpAjZduEuMze0BhWoqa/hV7QFGds6qqFXtA4C2QoPgqe0Bo3OVsqyx7QNULmYbcR3tAMhjIWPJOe0B+V1+4TpF7QAD34cXHaXtAck0mE7xpe0AwZHWr54B7QITSvIgbg3tA2TtI9Hege0BNtiaCvah7QH0/NV667ntAkmtU8ZC9e0CS/Zh7zb17QICaWrbW1ntAkqCupIvZe0Dda/dhE/l7QGhUhauIAnxAbv8lBCZMfEAxCKwcWhF8QLOtC+TeEXxA0NA/wcUsfECgbqDA+y98QNNzwc+uUXxAg/Lj1FNcfEBt5/upkal8QNCkA0gjZXxA1F1+TPBlfEAhByXMtIJ8QLtkd9xrhnxAckIyLqZpfECekEL+HrZ8QF6n7E/9Bn1AYhl2c+y4fED1DfG0Abp8QHE9Ctej2HxAyjJp+NvcfEC2hq005L58QLkuoSfqD31AXI/C9WhkfUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"9975"},"selection_policy":{"id":"9976"}},"id":"9939","type":"ColumnDataSource"},{"attributes":{},"id":"9970","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9956"},"dimension":1,"ticker":null,"visible":false},"id":"9959","type":"Grid"},{"attributes":{},"id":"9957","type":"BasicTicker"},{"attributes":{},"id":"9971","type":"AllLabels"},{"attributes":{},"id":"9975","type":"Selection"},{"attributes":{"text":"Milwaukee \\u2192 Toledo"},"id":"9942","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9960","type":"HoverTool"},{"attributes":{},"id":"9948","type":"LinearScale"},{"attributes":{"source":{"id":"9939"}},"id":"9967","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9960"}]},"id":"9961","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9940"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9965","type":"Rect"},{"attributes":{"end":6},"id":"9946","type":"Range1d"},{"attributes":{},"id":"9976","type":"UnionRenderers"},{"attributes":{},"id":"9950","type":"LinearScale"},{"attributes":{},"id":"9973","type":"BasicTickFormatter"},{"attributes":{},"id":"9953","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9939"},"glyph":{"id":"9964"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9965"},"view":{"id":"9967"}},"id":"9966","type":"GlyphRenderer"},{"attributes":{},"id":"9974","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9940"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9964","type":"Rect"},{"attributes":{"end":6},"id":"9944","type":"Range1d"},{"attributes":{"below":[{"id":"9952"}],"center":[{"id":"9955"},{"id":"9959"}],"height":400,"left":[{"id":"9956"}],"renderers":[{"id":"9966"}],"title":{"id":"9942"},"toolbar":{"id":"9961"},"toolbar_location":null,"width":400,"x_range":{"id":"9944"},"x_scale":{"id":"9948"},"y_range":{"id":"9946"},"y_scale":{"id":"9950"}},"id":"9941","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9940","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"9970"},"major_label_policy":{"id":"9971"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9953"}},"id":"9952","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"9973"},"major_label_policy":{"id":"9974"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9957"}},"id":"9956","type":"LinearAxis"},{"attributes":{"axis":{"id":"9952"},"ticker":null,"visible":false},"id":"9955","type":"Grid"}],"root_ids":["9941"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"c9b99c31-4956-4790-a589-0f40e0653520","root_ids":["9941"],"roots":{"9941":"4662e909-f1c5-4024-8534-d20287125c1b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"597afb79-737c-47ee-9de5-912587f9dd89":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10008","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"9978"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10003","type":"Rect"},{"attributes":{},"id":"10009","type":"AllLabels"},{"attributes":{},"id":"10013","type":"Selection"},{"attributes":{"axis":{"id":"9994"},"dimension":1,"ticker":null,"visible":false},"id":"9997","type":"Grid"},{"attributes":{"end":6},"id":"9982","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"9998","type":"HoverTool"},{"attributes":{"source":{"id":"9977"}},"id":"10005","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"9998"}]},"id":"9999","type":"Toolbar"},{"attributes":{},"id":"10014","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"9978"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10002","type":"Rect"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10011"},"major_label_policy":{"id":"10012"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9995"}},"id":"9994","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9977"},"glyph":{"id":"10002"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10003"},"view":{"id":"10005"}},"id":"10004","type":"GlyphRenderer"},{"attributes":{},"id":"10011","type":"BasicTickFormatter"},{"attributes":{},"id":"9986","type":"LinearScale"},{"attributes":{"end":6},"id":"9984","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"mZAgpi5Lh0BP5h99s1+HQMct5ufGYIdAWdMGcb9oh0DduvZgzXeHQLu/ME/dgIdAqqtMQlOKh0CLZNnd/Z+HQPuh47QBqIdAq6o8Jmeph0CzEqkfCrKHQPaSa6/KwYdAF8DvOjbLh0AOUHUjN9WHQLXQhNxr6IdAp12n7E/wh0CQJ5NkB/KHQBCiaxWTCohATKGYYagLiEBywK4mjxWIQHmIkAQbIIhAoleo2pM/iECy9ne25ziIQHSk6aKnOohAOD8P/7pUiEBuqHOgglWIQNRUYBLoX4hA5MCr5f5qiEBPhYlQxoiIQIsuFFWEgYhAWCFA4UeDiEDufD813p6IQJCvTt9cn4hAMFUf/kCqiEBIZdTG4rWIQPyyasb40YhAa/qi8yDKiEA9npYf6MuIQNgYKrWt6IhAs7YpHjfpiECLVd7pmfSIQLKd76fGAIlAC+mVV5MsiUBFMj+SvRKJQCEb7V2IFIlAw7QUNX0yiUAqT8Uy8kWJQO3pj9XyPolAHdYKiapLiUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10013"},"selection_policy":{"id":"10014"}},"id":"9977","type":"ColumnDataSource"},{"attributes":{},"id":"9995","type":"BasicTicker"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"9978","type":"LinearColorMapper"},{"attributes":{},"id":"9991","type":"BasicTicker"},{"attributes":{"text":"Milwaukee \\u2192 Toronto"},"id":"9980","type":"Title"},{"attributes":{},"id":"9988","type":"LinearScale"},{"attributes":{},"id":"10012","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10008"},"major_label_policy":{"id":"10009"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"9991"}},"id":"9990","type":"LinearAxis"},{"attributes":{"below":[{"id":"9990"}],"center":[{"id":"9993"},{"id":"9997"}],"height":400,"left":[{"id":"9994"}],"renderers":[{"id":"10004"}],"title":{"id":"9980"},"toolbar":{"id":"9999"},"toolbar_location":null,"width":400,"x_range":{"id":"9982"},"x_scale":{"id":"9986"},"y_range":{"id":"9984"},"y_scale":{"id":"9988"}},"id":"9979","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"9990"},"ticker":null,"visible":false},"id":"9993","type":"Grid"}],"root_ids":["9979"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"597afb79-737c-47ee-9de5-912587f9dd89","root_ids":["9979"],"roots":{"9979":"363d2ed7-79b3-4aaf-9f29-411c65ce9ab9"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"ca420887-a5e0-4a37-b6b2-8c2134667769":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10047","type":"AllLabels"},{"attributes":{"end":6},"id":"10022","type":"Range1d"},{"attributes":{},"id":"10051","type":"Selection"},{"attributes":{"source":{"id":"10015"}},"id":"10043","type":"CDSView"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10016","type":"LinearColorMapper"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10016"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10041","type":"Rect"},{"attributes":{},"id":"10052","type":"UnionRenderers"},{"attributes":{"end":6},"id":"10020","type":"Range1d"},{"attributes":{},"id":"10049","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10028"},"ticker":null,"visible":false},"id":"10031","type":"Grid"},{"attributes":{"axis":{"id":"10032"},"dimension":1,"ticker":null,"visible":false},"id":"10035","type":"Grid"},{"attributes":{"data_source":{"id":"10015"},"glyph":{"id":"10040"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10041"},"view":{"id":"10043"}},"id":"10042","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"10036"}]},"id":"10037","type":"Toolbar"},{"attributes":{"below":[{"id":"10028"}],"center":[{"id":"10031"},{"id":"10035"}],"height":400,"left":[{"id":"10032"}],"renderers":[{"id":"10042"}],"title":{"id":"10018"},"toolbar":{"id":"10037"},"toolbar_location":null,"width":400,"x_range":{"id":"10020"},"x_scale":{"id":"10024"},"y_range":{"id":"10022"},"y_scale":{"id":"10026"}},"id":"10017","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10033","type":"BasicTicker"},{"attributes":{},"id":"10050","type":"AllLabels"},{"attributes":{"data":{"val":{"__ndarray__":"sicmFKf2fEBpIPGG7/98QKiYORNpDH1A3G1yU54XfUCG8Ykr/SF9QFYlNsSdLH1ACj+CLJUwfUBm5rgJzVJ9QIWBQphWXH1AsFmJ1E9pfUCsYuBvSnV9QLNTvUb8gH1Aj8L1KFx2fUCccXVb/ZB9QA19Zv/yrn1AoOKTqb24fUC5GtmVNsZ9QIl/M4z20n1AbrzgeEPIfUAcmg2N4tR9QCF8g4pl8X1AwTv59BgLfkCvGwC7JBV+QO5OLRE+Cn5AOUDVjZwXfkA4/vrXiAx+QJxJQPFoM35ApoaRuc1RfkBJNNzbCHx+QMp8UcyLcX5ArT4NzvZlfkAFygEWFHR+QFKAKJiRaH5AKSFYVe+RfkAqkZ/oNbJ+QB8UlKJV2X5A2bW93fLNfkBsLu2Kr8F+QMMrSZ6L0H5AeCo7WJrEfkCISbiQZ/B+QK+brReeEn9A9PNLaaI2f0D0Fg/vWSp/QB7250doHX9AgY2QJgMtf0CSrGgYoyB/QKbW+422MX9ANKa7RgZzf0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10051"},"selection_policy":{"id":"10052"}},"id":"10015","type":"ColumnDataSource"},{"attributes":{},"id":"10029","type":"BasicTicker"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10049"},"major_label_policy":{"id":"10050"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10033"}},"id":"10032","type":"LinearAxis"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10046"},"major_label_policy":{"id":"10047"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10029"}},"id":"10028","type":"LinearAxis"},{"attributes":{},"id":"10046","type":"BasicTickFormatter"},{"attributes":{},"id":"10026","type":"LinearScale"},{"attributes":{},"id":"10024","type":"LinearScale"},{"attributes":{"text":"Milwaukee \\u2192 Windsor"},"id":"10018","type":"Title"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10016"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10040","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10036","type":"HoverTool"}],"root_ids":["10017"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"ca420887-a5e0-4a37-b6b2-8c2134667769","root_ids":["10017"],"roots":{"10017":"6eb7ab53-c99a-4ae4-929e-f795bdc43323"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"04989956-024b-4f71-8e7a-cefe42ed3a53":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"10060","type":"Range1d"},{"attributes":{},"id":"10085","type":"AllLabels"},{"attributes":{},"id":"10089","type":"Selection"},{"attributes":{},"id":"10064","type":"LinearScale"},{"attributes":{},"id":"10067","type":"BasicTicker"},{"attributes":{"source":{"id":"10053"}},"id":"10081","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10054"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10078","type":"Rect"},{"attributes":{},"id":"10090","type":"UnionRenderers"},{"attributes":{"below":[{"id":"10066"}],"center":[{"id":"10069"},{"id":"10073"}],"height":400,"left":[{"id":"10070"}],"renderers":[{"id":"10080"}],"title":{"id":"10056"},"toolbar":{"id":"10075"},"toolbar_location":null,"width":400,"x_range":{"id":"10058"},"x_scale":{"id":"10062"},"y_range":{"id":"10060"},"y_scale":{"id":"10064"}},"id":"10055","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"10058","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10054","type":"LinearColorMapper"},{"attributes":{},"id":"10087","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10053"},"glyph":{"id":"10078"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10079"},"view":{"id":"10081"}},"id":"10080","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10084"},"major_label_policy":{"id":"10085"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10067"}},"id":"10066","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10087"},"major_label_policy":{"id":"10088"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10071"}},"id":"10070","type":"LinearAxis"},{"attributes":{"axis":{"id":"10066"},"ticker":null,"visible":false},"id":"10069","type":"Grid"},{"attributes":{},"id":"10088","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"10074"}]},"id":"10075","type":"Toolbar"},{"attributes":{"axis":{"id":"10070"},"dimension":1,"ticker":null,"visible":false},"id":"10073","type":"Grid"},{"attributes":{},"id":"10071","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"W0QUk6cbkEATfxR1hhKQQNttF5q7DZBAFhiyupUOkEC2R2+43xOQQLzrbMgPFJBAmPc401QbkEAKLIApI0CQQGQ+INBZP5BAk4ychU06kEAZO+ElKDuQQEYm4NdYNZBAYcWp1gJBkEBtIF1s6kiQQJnZ5zHqbJBAkxlvKy1skEBLqyFx32aQQPt5U5G6Z5BAIxPwa8RhkEAng6Pk9W2QQGItPgWAdpBAJ4dPOrGZkEBRvMraJpmQQATKplxxk5BA3LjF/EyUkEAAAAAAMI6QQM1c4PLompBANlZinhWkkEDXGHRCeMaQQBssnKQpxpBA2bPnMgXAkEC+9zdo38CQQN3sD5SbupBAcjYdAdzHkEALf4Y3q9GQQGXG20o/85BABoAqbizzkEAN38K6seyQQKA2qtNx7ZBAutkfKAfnkEAXEFoPz/SQQN+nqtBA/5BAFVgAUwYgkUDy07g3LyCRQEIKnkJeGZFAo1nZPgQakUC5quy7chORQN3NUx3CIZFAs9DOadYskUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10089"},"selection_policy":{"id":"10090"}},"id":"10053","type":"ColumnDataSource"},{"attributes":{},"id":"10084","type":"BasicTickFormatter"},{"attributes":{"text":"Montreal \\u2192 Chicago"},"id":"10056","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10074","type":"HoverTool"},{"attributes":{},"id":"10062","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10054"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10079","type":"Rect"}],"root_ids":["10055"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"04989956-024b-4f71-8e7a-cefe42ed3a53","root_ids":["10055"],"roots":{"10055":"c0d98036-02bf-49ac-8d95-572f6dce9a89"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"b138441c-ca40-4292-bb35-50d7f7ab5a9f":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"field":"val","transform":{"id":"10092"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10116","type":"Rect"},{"attributes":{"end":6},"id":"10096","type":"Range1d"},{"attributes":{},"id":"10122","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"10104"}],"center":[{"id":"10107"},{"id":"10111"}],"height":400,"left":[{"id":"10108"}],"renderers":[{"id":"10118"}],"title":{"id":"10094"},"toolbar":{"id":"10113"},"toolbar_location":null,"width":400,"x_range":{"id":"10096"},"x_scale":{"id":"10100"},"y_range":{"id":"10098"},"y_scale":{"id":"10102"}},"id":"10093","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10092","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10122"},"major_label_policy":{"id":"10123"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10105"}},"id":"10104","type":"LinearAxis"},{"attributes":{},"id":"10127","type":"Selection"},{"attributes":{},"id":"10126","type":"AllLabels"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10125"},"major_label_policy":{"id":"10126"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10109"}},"id":"10108","type":"LinearAxis"},{"attributes":{"axis":{"id":"10104"},"ticker":null,"visible":false},"id":"10107","type":"Grid"},{"attributes":{"source":{"id":"10091"}},"id":"10119","type":"CDSView"},{"attributes":{},"id":"10128","type":"UnionRenderers"},{"attributes":{"axis":{"id":"10108"},"dimension":1,"ticker":null,"visible":false},"id":"10111","type":"Grid"},{"attributes":{},"id":"10109","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"p2cw/GbKhkCgIj378L2GQFTjpZsUzIZAG+1dKPXYhkBEi2zne8yGQDn8JC072YZAXHFxVB6whkC4HoXrURmHQK9P75jgC4dAWUXJ9fAah0A51iAnpyiHQNes6TA1G4dAwVICB8koh0D96rts5fyGQMrV2do8aIdA452NplR4h0BkO99PzWmHQFEr8SVZeIdAU8oQbMGGh0BIqd/gVniHQJ5kBoWsSYdA24wuyie3h0AdYnJZK8iHQHAx9ampuIdAaIDBJAvIh0Dm2DD5RdeHQNeTr7rkx4dAP95QnXOWh0DtQ4O5EgaIQF66SQwCGIhAdZMYBIYHiECHaYQjvReIQIB7Q4bKJ4hAX+qMlHIXiEDgV5u1OuOHQAWPyqj9VIhAnxIhv9hniED7in/p3niIQJ6+VCJvZ4hAGh5WE094iEDt1FxuAGeIQIHR5c0BMIhAFkYfmOijiEDa1gVyr7eIQFyPwvWIyYhAthMlISG3iEC0wGig08iIQHUrOkiOtohAKN8i5sh8iEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10127"},"selection_policy":{"id":"10128"}},"id":"10091","type":"ColumnDataSource"},{"attributes":{},"id":"10123","type":"AllLabels"},{"attributes":{"text":"Montreal \\u2192 Cleveland"},"id":"10094","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10112","type":"HoverTool"},{"attributes":{},"id":"10100","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"10112"}]},"id":"10113","type":"Toolbar"},{"attributes":{},"id":"10125","type":"BasicTickFormatter"},{"attributes":{"end":6},"id":"10098","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10092"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10117","type":"Rect"},{"attributes":{},"id":"10102","type":"LinearScale"},{"attributes":{"data_source":{"id":"10091"},"glyph":{"id":"10116"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10117"},"view":{"id":"10119"}},"id":"10118","type":"GlyphRenderer"},{"attributes":{},"id":"10105","type":"BasicTicker"}],"root_ids":["10093"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"b138441c-ca40-4292-bb35-50d7f7ab5a9f","root_ids":["10093"],"roots":{"10093":"85b10bb4-c81d-4a11-8cfc-c618ce466119"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"be5ef425-4fa7-4e1a-a792-9cafb6ac70db":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"10150"}]},"id":"10151","type":"Toolbar"},{"attributes":{},"id":"10163","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10130"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10154","type":"Rect"},{"attributes":{},"id":"10165","type":"Selection"},{"attributes":{},"id":"10143","type":"BasicTicker"},{"attributes":{"below":[{"id":"10142"}],"center":[{"id":"10145"},{"id":"10149"}],"height":400,"left":[{"id":"10146"}],"renderers":[{"id":"10156"}],"title":{"id":"10132"},"toolbar":{"id":"10151"},"toolbar_location":null,"width":400,"x_range":{"id":"10134"},"x_scale":{"id":"10138"},"y_range":{"id":"10136"},"y_scale":{"id":"10140"}},"id":"10131","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10138","type":"LinearScale"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10130","type":"LinearColorMapper"},{"attributes":{"end":6},"id":"10136","type":"Range1d"},{"attributes":{"data_source":{"id":"10129"},"glyph":{"id":"10154"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10155"},"view":{"id":"10157"}},"id":"10156","type":"GlyphRenderer"},{"attributes":{},"id":"10166","type":"UnionRenderers"},{"attributes":{},"id":"10140","type":"LinearScale"},{"attributes":{"text":"Montreal \\u2192 Detroit"},"id":"10132","type":"Title"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10160"},"major_label_policy":{"id":"10161"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10143"}},"id":"10142","type":"LinearAxis"},{"attributes":{},"id":"10164","type":"AllLabels"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10163"},"major_label_policy":{"id":"10164"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10147"}},"id":"10146","type":"LinearAxis"},{"attributes":{"axis":{"id":"10142"},"ticker":null,"visible":false},"id":"10145","type":"Grid"},{"attributes":{"end":6},"id":"10134","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"gArs1vdahUAQatDhm16FQH8jy5NFXIVAcrbKXQVdhUBHbBxWjWiFQBhMssSJbIVASA/o8fBwhUCbCqe7gZyFQBJKBE9WoIVAnjQets6dhUCamZmZmZ6FQNnsSPXNqoVAmZqpteWuhUAobWBhp7OFQHF8owyb5YVAGzEOiTbihUC9RXHYV9+FQMF8aNUt4IVAcQFolA7thUATVa6mQfGFQAjL2NBd9oVAZj1rbbAnhkBZ4fFIByyGQGiWBKipKIZA4stEEcIhhkA7TKAtTC+GQJOjpZedM4ZA5yhRQBQ5hkDKw0KtaWGGQLRZ9bnadoZAVGf/TclqhkAJrxNNVmOGQOli00qBcYZADV6qiPl1hkDHhsmvynuGQAqm9RIeo4ZA5XVpaLi5hkA5pAf06KyGQCr+74jqpIZAnQ35Z7azhkCHGK95VbiGQKfkQR+BvoZASoioeNLkhkBBlHn1a/OGQCV1ApoI74ZAK5ZshqXvhkBSuB6F6/WGQAdnpmqx+oZAh0K6jjcBh0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10165"},"selection_policy":{"id":"10166"}},"id":"10129","type":"ColumnDataSource"},{"attributes":{},"id":"10160","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10146"},"dimension":1,"ticker":null,"visible":false},"id":"10149","type":"Grid"},{"attributes":{},"id":"10147","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10130"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10155","type":"Rect"},{"attributes":{},"id":"10161","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10150","type":"HoverTool"},{"attributes":{"source":{"id":"10129"}},"id":"10157","type":"CDSView"}],"root_ids":["10131"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"be5ef425-4fa7-4e1a-a792-9cafb6ac70db","root_ids":["10131"],"roots":{"10131":"4fc34ae6-3401-4207-9ec9-2ea490b71693"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"d9701f73-bb7d-4c49-9287-b36a93cd558a":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10204","type":"UnionRenderers"},{"attributes":{},"id":"10202","type":"AllLabels"},{"attributes":{"end":6},"id":"10172","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10168"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10192","type":"Rect"},{"attributes":{"below":[{"id":"10180"}],"center":[{"id":"10183"},{"id":"10187"}],"height":400,"left":[{"id":"10184"}],"renderers":[{"id":"10194"}],"title":{"id":"10170"},"toolbar":{"id":"10189"},"toolbar_location":null,"width":400,"x_range":{"id":"10172"},"x_scale":{"id":"10176"},"y_range":{"id":"10174"},"y_scale":{"id":"10178"}},"id":"10169","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10198"},"major_label_policy":{"id":"10199"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10181"}},"id":"10180","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10168","type":"LinearColorMapper"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10201"},"major_label_policy":{"id":"10202"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10185"}},"id":"10184","type":"LinearAxis"},{"attributes":{"axis":{"id":"10180"},"ticker":null,"visible":false},"id":"10183","type":"Grid"},{"attributes":{},"id":"10198","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10184"},"dimension":1,"ticker":null,"visible":false},"id":"10187","type":"Grid"},{"attributes":{},"id":"10185","type":"BasicTicker"},{"attributes":{},"id":"10199","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10168"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10193","type":"Rect"},{"attributes":{"text":"Montreal \\u2192 Duluth"},"id":"10170","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10188","type":"HoverTool"},{"attributes":{},"id":"10176","type":"LinearScale"},{"attributes":{"source":{"id":"10167"}},"id":"10195","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10188"}]},"id":"10189","type":"Toolbar"},{"attributes":{"data":{"val":{"__ndarray__":"fqmfN5U0lUCndRvUjjKVQMtHUtLzOpVAnDBhNJsolUDRCDaufyWVQA6D+StkA5RA8wAW+cX6kkDPZtXnKnaVQBQF+kQuh5VAWHIVi798lUBLOsrBHGmVQJqZmZnZZZVAO1RTkgVClEAfhetRWDeTQNb/OcyXt5VADVTGv6/JlUAGgZVDi76VQNlfdk+eqZVAQUZAhTOmlUBGQfD4poCUQEoJwarqc5NAAOMZNPT4lUAnh086MQyWQLSPFfxWAJZAZoUi3R/qlUAK16NwjeaVQHMSSl9Iv5RAl3FTA32wk0AqxvmbUDqWQB/WG7WyTpZAQbrYtCJClkAVj4tqoSqWQNNnB1znJpZAfv/mxen9lEDD9ShcD+2TQFSp2QOte5ZAOQmlLzSRlkDvyFht7oOWQKK0N/gia5ZAexSuR0FnlkCJ7IMsizyVQO55/rShKZRAfoy5awm9lkBTPC6qtdOWQHzzGya6xZZAMNrjhaSrlkAiwVQzm6eWQLa93ZIse5VAO+KQDTRmlEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10203"},"selection_policy":{"id":"10204"}},"id":"10167","type":"ColumnDataSource"},{"attributes":{"end":6},"id":"10174","type":"Range1d"},{"attributes":{"data_source":{"id":"10167"},"glyph":{"id":"10192"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10193"},"view":{"id":"10195"}},"id":"10194","type":"GlyphRenderer"},{"attributes":{},"id":"10203","type":"Selection"},{"attributes":{},"id":"10178","type":"LinearScale"},{"attributes":{},"id":"10201","type":"BasicTickFormatter"},{"attributes":{},"id":"10181","type":"BasicTicker"}],"root_ids":["10169"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"d9701f73-bb7d-4c49-9287-b36a93cd558a","root_ids":["10169"],"roots":{"10169":"d828dae9-16e6-437d-9f85-30b4b8a189bf"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"cc43d9ec-0500-45d3-9dd0-23861a9318ff":{"defs":[],"roots":{"references":[{"attributes":{"text":"Montreal \\u2192 Hamilton"},"id":"10208","type":"Title"},{"attributes":{"end":6},"id":"10210","type":"Range1d"},{"attributes":{},"id":"10214","type":"LinearScale"},{"attributes":{},"id":"10219","type":"BasicTicker"},{"attributes":{},"id":"10240","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10206","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10236"},"major_label_policy":{"id":"10237"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10219"}},"id":"10218","type":"LinearAxis"},{"attributes":{"end":6},"id":"10212","type":"Range1d"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10239"},"major_label_policy":{"id":"10240"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10223"}},"id":"10222","type":"LinearAxis"},{"attributes":{},"id":"10241","type":"Selection"},{"attributes":{"axis":{"id":"10218"},"ticker":null,"visible":false},"id":"10221","type":"Grid"},{"attributes":{},"id":"10216","type":"LinearScale"},{"attributes":{},"id":"10236","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10222"},"dimension":1,"ticker":null,"visible":false},"id":"10225","type":"Grid"},{"attributes":{},"id":"10223","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10206"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10231","type":"Rect"},{"attributes":{},"id":"10237","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10206"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10230","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10226","type":"HoverTool"},{"attributes":{"source":{"id":"10205"}},"id":"10233","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10226"}]},"id":"10227","type":"Toolbar"},{"attributes":{"data":{"val":{"__ndarray__":"8fCeA0snfkB0YaQXdR9+QPJyfcS0P35ACpEdZa5gfkC1LtqILGx+QJCCTNdYY35AFgIUfgRofkDH31G+m5B+QH44SIiynH5AW4buSAuqfkBIF5tW6sx+QI5WWuvw2H5AoLZXMJu2fkBGggQgqdR+QJzOBHns+X5AAsF39pAGf0BPv1XoTRR/QHh1M0gmOX9AdKa/TbVFf0AjdyLSYCF/QGnaD8JNQX9Acb23Mz1jf0B4IcJkb3B/QEP4vIeQfn9AtvuwOWKlf0BMzj+webJ/QKY37XMmjH9AmVoAZPKtf0BGrGrujcx/QPyp8dJN2n9AODEkJ9Pof0D6QJcVzwiAQBmPUgmfD4BAKfi3Fez2f0Be2QWDSw2AQI7NjlTvGoBAQJmQIBYigEAWtUXjiimAQBkEVg7tPoBABaOSOgFGgEBWXMHb2DCAQHYZ/tOdQ4BA+ETosZdPgEB7ybVXBVeAQJBR+TKsXoBAN8cUBwt1gEDyttJrY3yAQJi8pqw7ZoBAh8UDJfB5gEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10241"},"selection_policy":{"id":"10242"}},"id":"10205","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"10218"}],"center":[{"id":"10221"},{"id":"10225"}],"height":400,"left":[{"id":"10222"}],"renderers":[{"id":"10232"}],"title":{"id":"10208"},"toolbar":{"id":"10227"},"toolbar_location":null,"width":400,"x_range":{"id":"10210"},"x_scale":{"id":"10214"},"y_range":{"id":"10212"},"y_scale":{"id":"10216"}},"id":"10207","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10242","type":"UnionRenderers"},{"attributes":{},"id":"10239","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10205"},"glyph":{"id":"10230"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10231"},"view":{"id":"10233"}},"id":"10232","type":"GlyphRenderer"}],"root_ids":["10207"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"cc43d9ec-0500-45d3-9dd0-23861a9318ff","root_ids":["10207"],"roots":{"10207":"78b4b166-cac0-4bfc-9268-640b8514f47b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"eab8dc49-2214-40b3-a907-58c71d34a658":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10274"},"major_label_policy":{"id":"10275"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10257"}},"id":"10256","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10277"},"major_label_policy":{"id":"10278"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10261"}},"id":"10260","type":"LinearAxis"},{"attributes":{"axis":{"id":"10256"},"ticker":null,"visible":false},"id":"10259","type":"Grid"},{"attributes":{},"id":"10274","type":"BasicTickFormatter"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10244","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"10260"},"dimension":1,"ticker":null,"visible":false},"id":"10263","type":"Grid"},{"attributes":{},"id":"10261","type":"BasicTicker"},{"attributes":{},"id":"10275","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10244"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10269","type":"Rect"},{"attributes":{},"id":"10279","type":"Selection"},{"attributes":{"text":"Montreal \\u2192 Milwaukee"},"id":"10246","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10264","type":"HoverTool"},{"attributes":{},"id":"10252","type":"LinearScale"},{"attributes":{"source":{"id":"10243"}},"id":"10271","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10264"}]},"id":"10265","type":"Toolbar"},{"attributes":{},"id":"10280","type":"UnionRenderers"},{"attributes":{"end":6},"id":"10250","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10244"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10268","type":"Rect"},{"attributes":{},"id":"10254","type":"LinearScale"},{"attributes":{},"id":"10277","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"R5G1hmK1kUAb9RCNbqSRQCGtMeg0tpFAXFZhM9C+kUCKHCJuPsGRQMa+ZOMhwZFAIeUn1a6/kUD9+bZg2eeRQM3MzMwM1pFA+FW5UBnpkUB/MVuyGuCRQNNQo5BU9ZFADcSymXP1kUCfr1kuG/SRQNRGdTpQGpJAf6SIDKsHkkDRHi+kAwmSQCzTLxHPEpJA+aBns2opkkBUyQBQxSmSQBx6i4eHKJJAq5MzFMdMkkBgWWlSijmSQMZOeAkeO5JA2nQEcINFkkBkzF1LiESSQLyyCwYXXpJAmkS94PNckkCD4PHtPX+SQJEsYAK3a5JAmZoEbzhtkkCHFtnON3iSQLZlwFmad5JAArhZvGiSkkAXD+85YJGSQJ54zhZAnpJAwf9WsuOdkkBPkNju7rWSQDW4rS3sqpJA5xpmaKyqkkBJvadyusaSQLa93ZLMxZJAMZi/QhbQkkDy0k1iENCSQHCUvDpX6ZJA4lmCjKDdkkA5tMh2vt2SQI/C9SgM+5JAM4gP7Dj6kkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10279"},"selection_policy":{"id":"10280"}},"id":"10243","type":"ColumnDataSource"},{"attributes":{},"id":"10257","type":"BasicTicker"},{"attributes":{"data_source":{"id":"10243"},"glyph":{"id":"10268"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10269"},"view":{"id":"10271"}},"id":"10270","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"10256"}],"center":[{"id":"10259"},{"id":"10263"}],"height":400,"left":[{"id":"10260"}],"renderers":[{"id":"10270"}],"title":{"id":"10246"},"toolbar":{"id":"10265"},"toolbar_location":null,"width":400,"x_range":{"id":"10248"},"x_scale":{"id":"10252"},"y_range":{"id":"10250"},"y_scale":{"id":"10254"}},"id":"10245","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10278","type":"AllLabels"},{"attributes":{"end":6},"id":"10248","type":"Range1d"}],"root_ids":["10245"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"eab8dc49-2214-40b3-a907-58c71d34a658","root_ids":["10245"],"roots":{"10245":"f9a153c4-9657-49e1-abc7-76f4af6c7689"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"48340106-091e-4f5d-9b0c-ea1b0de44c75":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"10288","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10282"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10306","type":"Rect"},{"attributes":{},"id":"10290","type":"LinearScale"},{"attributes":{"end":6},"id":"10286","type":"Range1d"},{"attributes":{},"id":"10312","type":"BasicTickFormatter"},{"attributes":{},"id":"10299","type":"BasicTicker"},{"attributes":{},"id":"10313","type":"AllLabels"},{"attributes":{},"id":"10317","type":"Selection"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10302","type":"HoverTool"},{"attributes":{"source":{"id":"10281"}},"id":"10309","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10282"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10307","type":"Rect"},{"attributes":{},"id":"10318","type":"UnionRenderers"},{"attributes":{"text":"Montreal \\u2192 Thunder Bay"},"id":"10284","type":"Title"},{"attributes":{"active_multi":null,"tools":[{"id":"10302"}]},"id":"10303","type":"Toolbar"},{"attributes":{"axis":{"id":"10294"},"ticker":null,"visible":false},"id":"10297","type":"Grid"},{"attributes":{},"id":"10295","type":"BasicTicker"},{"attributes":{"below":[{"id":"10294"}],"center":[{"id":"10297"},{"id":"10301"}],"height":400,"left":[{"id":"10298"}],"renderers":[{"id":"10308"}],"title":{"id":"10284"},"toolbar":{"id":"10303"},"toolbar_location":null,"width":400,"x_range":{"id":"10286"},"x_scale":{"id":"10290"},"y_range":{"id":"10288"},"y_scale":{"id":"10292"}},"id":"10283","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10292","type":"LinearScale"},{"attributes":{},"id":"10315","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10281"},"glyph":{"id":"10306"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10307"},"view":{"id":"10309"}},"id":"10308","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10312"},"major_label_policy":{"id":"10313"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10295"}},"id":"10294","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10282","type":"LinearColorMapper"},{"attributes":{},"id":"10316","type":"AllLabels"},{"attributes":{"data":{"val":{"__ndarray__":"1LX2PkVLk0Cf6Lrwo0yTQBE5fT1fYpNA6+V3mmxwk0Dz6EZYJH2TQIJxcOn4h5NAIk+SrpmTk0C3tvC8xIGTQNxmKsTThJNAOPWB5B2ak0CVY7K4n6WTQLw/3qv2spNAv/BKkle+k0DkMJi/gsqTQPlmmxuDtZNAA+/k04O4k0Axe9l2as6TQH7lQXoK35NAacnjaTnsk0Dbi2g7tvSTQKUSntBrAZRAPBdGekHpk0BZFHZRxOqTQI1HqYQnA5RAhpDz/t8YlEBbQ6m9OCGUQPYmhuQUK5RARRDn4VQ4lEB+x/DY/xyUQEOu1LPQH5RAaHbdW2E3lEBy++WTlU6UQM5V8xwRW5RAM6ZgjXNhlEAG8uzyPW+UQMB3mze+UJRAXVMgszNZlECkpl1ME2yUQE1J1uHIgpRAby7+tkeRlEBOQX420peUQMjT8gMnppRAAihGlnyElECHwJFAI5OUQFvQe2PIn5RAx549l2m4lEAQBwlRfseUQCVa8nhKyJRAZ9E7FRDdlEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10317"},"selection_policy":{"id":"10318"}},"id":"10281","type":"ColumnDataSource"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10315"},"major_label_policy":{"id":"10316"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10299"}},"id":"10298","type":"LinearAxis"},{"attributes":{"axis":{"id":"10298"},"dimension":1,"ticker":null,"visible":false},"id":"10301","type":"Grid"}],"root_ids":["10283"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"48340106-091e-4f5d-9b0c-ea1b0de44c75","root_ids":["10283"],"roots":{"10283":"4c128f2a-c058-40e4-af4d-1e505b6babbe"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"8bb6fbdf-e573-4588-abd6-290d8d4700b4":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10333","type":"BasicTicker"},{"attributes":{},"id":"10350","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10332"},"ticker":null,"visible":false},"id":"10335","type":"Grid"},{"attributes":{"text":"Montreal \\u2192 Toledo"},"id":"10322","type":"Title"},{"attributes":{},"id":"10328","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10320"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10345","type":"Rect"},{"attributes":{},"id":"10351","type":"AllLabels"},{"attributes":{"end":6},"id":"10326","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10320"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10344","type":"Rect"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10320","type":"LinearColorMapper"},{"attributes":{},"id":"10330","type":"LinearScale"},{"attributes":{},"id":"10355","type":"Selection"},{"attributes":{"below":[{"id":"10332"}],"center":[{"id":"10335"},{"id":"10339"}],"height":400,"left":[{"id":"10336"}],"renderers":[{"id":"10346"}],"title":{"id":"10322"},"toolbar":{"id":"10341"},"toolbar_location":null,"width":400,"x_range":{"id":"10324"},"x_scale":{"id":"10328"},"y_range":{"id":"10326"},"y_scale":{"id":"10330"}},"id":"10321","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10350"},"major_label_policy":{"id":"10351"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10333"}},"id":"10332","type":"LinearAxis"},{"attributes":{"source":{"id":"10319"}},"id":"10347","type":"CDSView"},{"attributes":{},"id":"10356","type":"UnionRenderers"},{"attributes":{"end":6},"id":"10324","type":"Range1d"},{"attributes":{},"id":"10353","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10319"},"glyph":{"id":"10344"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10345"},"view":{"id":"10347"}},"id":"10346","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"10336"},"dimension":1,"ticker":null,"visible":false},"id":"10339","type":"Grid"},{"attributes":{},"id":"10354","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10340","type":"HoverTool"},{"attributes":{},"id":"10337","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"10340"}]},"id":"10341","type":"Toolbar"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10353"},"major_label_policy":{"id":"10354"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10337"}},"id":"10336","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"V0Z+WHohh0DTZkHN9SaHQMmRzsB4LIdA8565Pccvh0ALthFPxkCHQJfJcDyvU4dAm05XHGNxh0Bw/9t2S2aHQBgGLLm6dYdAXKrSFodxh0DNzMzM7HSHQNoaEYyzhodA4uvGFm2ah0Do3h7fubmHQIi4OZUcq4dA8QQM3Eu7h0CYz6ivrbaHQKf631sSuodAqn8QyaDMh0AuDh3xKuGHQDwD2aEQAohAAnZ/BrX6h0DDb/n+3ACIQHeAzHPp+4dAgSjz6jf/h0B65A8GjhKIQHOcgMvoJ4hAkCeTZGdKiEChB4iTJUCIQPa5NUQgUohAe/mdJkNBiEBbVgZ6XUSIQFDdAUN7WIhAvr7WpaZuiEDct1onvpKIQECZkCCWhYhA5kgd0zmMiECFBmLZnIaIQEGUefV7lohAhH3gz/WqiEDDwTl+Y7WIQDDcFOoU24hA2JamrQbLiECZzS2+4tGIQD0K16Pw2YhAwV1RpWH3iEBIuUWqefGIQFI94wwf/IhAfWzcrGsjiUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10355"},"selection_policy":{"id":"10356"}},"id":"10319","type":"ColumnDataSource"}],"root_ids":["10321"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"8bb6fbdf-e573-4588-abd6-290d8d4700b4","root_ids":["10321"],"roots":{"10321":"84edfad9-cc7f-45b5-9039-61b600e2785b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"e265f433-7391-44b0-bc00-f2718aacf113":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10358"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10383","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10378","type":"HoverTool"},{"attributes":{},"id":"10366","type":"LinearScale"},{"attributes":{"text":"Montreal \\u2192 Toronto"},"id":"10360","type":"Title"},{"attributes":{},"id":"10389","type":"AllLabels"},{"attributes":{"end":6},"id":"10364","type":"Range1d"},{"attributes":{},"id":"10393","type":"Selection"},{"attributes":{},"id":"10368","type":"LinearScale"},{"attributes":{},"id":"10371","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10358"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10382","type":"Rect"},{"attributes":{},"id":"10394","type":"UnionRenderers"},{"attributes":{"below":[{"id":"10370"}],"center":[{"id":"10373"},{"id":"10377"}],"height":400,"left":[{"id":"10374"}],"renderers":[{"id":"10384"}],"title":{"id":"10360"},"toolbar":{"id":"10379"},"toolbar_location":null,"width":400,"x_range":{"id":"10362"},"x_scale":{"id":"10366"},"y_range":{"id":"10364"},"y_scale":{"id":"10368"}},"id":"10359","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"10362","type":"Range1d"},{"attributes":{},"id":"10391","type":"BasicTickFormatter"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10358","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"10357"},"glyph":{"id":"10382"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10383"},"view":{"id":"10385"}},"id":"10384","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10388"},"major_label_policy":{"id":"10389"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10371"}},"id":"10370","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10391"},"major_label_policy":{"id":"10392"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10375"}},"id":"10374","type":"LinearAxis"},{"attributes":{"axis":{"id":"10370"},"ticker":null,"visible":false},"id":"10373","type":"Grid"},{"attributes":{},"id":"10392","type":"AllLabels"},{"attributes":{"axis":{"id":"10374"},"dimension":1,"ticker":null,"visible":false},"id":"10377","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"10378"}]},"id":"10379","type":"Toolbar"},{"attributes":{},"id":"10375","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"3pOHhVpWe0BZVB+jty97QMl2vp8aUXtA4g6KnLRze0CV2uYhrpZ7QOjjNQqkuHtARq3Vw5ype0BFptfBvK57QOcEyCsLhXtAZfTtbs+oe0A/TAwTN857QP8atWd783tAmUaTi9EXfEBiGXZz7Ad8QJ6QQv4eB3xAgt1VtF7ae0AOmgI+hAB8QI5hqYm5KHxAaluDrUhQfEA+gQsN/3Z8QIut+yI8ZnxABaOSOoFffEAQjv48si98QJhuEoPAWXxA6p4rADyDfEDUm1HzFa18QO/jaI4s1nxApxmc0ovEfEBsteJ247d8QKtmjMUFhXxAt6wM9LqxfEA5tMh2vt18QD7cHznjCX1Akx7hD1o1fUDQrSGC2yJ9QMafTbNFEH1ARj8aTlnafEDjEuxktQl9QIjJZe1AOH1AtkTTfrBmfUA4WVmRh5R9QOsZwjErgX1ALbKd76dofUDU78LWrC99QAJR5tWvYX1A5QboY8OSfUAghaHEfcN9QOm7thK1831AFK5H4XrffUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10393"},"selection_policy":{"id":"10394"}},"id":"10357","type":"ColumnDataSource"},{"attributes":{"source":{"id":"10357"}},"id":"10385","type":"CDSView"},{"attributes":{},"id":"10388","type":"BasicTickFormatter"}],"root_ids":["10359"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"e265f433-7391-44b0-bc00-f2718aacf113","root_ids":["10359"],"roots":{"10359":"091a876a-2fe5-4821-8776-9e05c706a98b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"32b4e744-d28f-4e29-a02b-81c435170ca4":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"10416"}]},"id":"10417","type":"Toolbar"},{"attributes":{"source":{"id":"10395"}},"id":"10423","type":"CDSView"},{"attributes":{"end":6},"id":"10402","type":"Range1d"},{"attributes":{},"id":"10406","type":"LinearScale"},{"attributes":{},"id":"10409","type":"BasicTicker"},{"attributes":{},"id":"10430","type":"AllLabels"},{"attributes":{},"id":"10426","type":"BasicTickFormatter"},{"attributes":{},"id":"10429","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10396"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10420","type":"Rect"},{"attributes":{"end":6},"id":"10400","type":"Range1d"},{"attributes":{"below":[{"id":"10408"}],"center":[{"id":"10411"},{"id":"10415"}],"height":400,"left":[{"id":"10412"}],"renderers":[{"id":"10422"}],"title":{"id":"10398"},"toolbar":{"id":"10417"},"toolbar_location":null,"width":400,"x_range":{"id":"10400"},"x_scale":{"id":"10404"},"y_range":{"id":"10402"},"y_scale":{"id":"10406"}},"id":"10397","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10431","type":"Selection"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10396","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10426"},"major_label_policy":{"id":"10427"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10409"}},"id":"10408","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10429"},"major_label_policy":{"id":"10430"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10413"}},"id":"10412","type":"LinearAxis"},{"attributes":{"axis":{"id":"10408"},"ticker":null,"visible":false},"id":"10411","type":"Grid"},{"attributes":{},"id":"10432","type":"UnionRenderers"},{"attributes":{},"id":"10427","type":"AllLabels"},{"attributes":{"axis":{"id":"10412"},"dimension":1,"ticker":null,"visible":false},"id":"10415","type":"Grid"},{"attributes":{},"id":"10413","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"bF7VWb2ShUC3lzRGa5GFQH62xIBbhIVAwim9gBiIhUAJghFFIn+FQMOayqLQa4VAYm+9AXFrhUDW+zK9qdeFQBTQRNgw1oVAzczMzEzRhUDsUbgeBcyFQGVD7W1ZwoVAWKWZk+ythUCSV4xfja2FQECZkCCWHIZAcAhVavYahkBM6U/RtxWGQBV6s7zxD4ZAyJi7lpAFhkDzQ1uECPCFQMjTTb2p74VAo6L7g4JhhkDMQGX8u1+GQMwF09UiWoZAwDfy5epThkAr7om/x0iGQIhOKnUkMoZA/08PG8YxhkANQFnnbqaGQCl5dY6BpIZARY5j2o2ehkAXbH5X/5eGQIevZej+i4ZAJO3rZUB0hkAvON544nOGQHfdtkpb64ZAba0vElrphkDEqube+OKGQHQ0/cgT3IZA6gQ0ETbPhkC497pWXLaGQGa0n9b+tYZAMzMzMzMwh0C8BRIUPy6HQETHaeNjJ4dAymiJOiggh0BNWgI6bRKHQE0Cikd4+IZAlpxuNBv4hkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10431"},"selection_policy":{"id":"10432"}},"id":"10395","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10396"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10421","type":"Rect"},{"attributes":{"text":"Montreal \\u2192 Windsor"},"id":"10398","type":"Title"},{"attributes":{"data_source":{"id":"10395"},"glyph":{"id":"10420"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10421"},"view":{"id":"10423"}},"id":"10422","type":"GlyphRenderer"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10416","type":"HoverTool"},{"attributes":{},"id":"10404","type":"LinearScale"}],"root_ids":["10397"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"32b4e744-d28f-4e29-a02b-81c435170ca4","root_ids":["10397"],"roots":{"10397":"fcdc3abf-ff65-443a-b8ce-5a03d023687b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"fe2c64e2-65c2-448e-83fd-ce49eb36679a":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10465","type":"AllLabels"},{"attributes":{"text":"Thunder Bay \\u2192 Chicago"},"id":"10436","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10454","type":"HoverTool"},{"attributes":{},"id":"10442","type":"LinearScale"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10434"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10458","type":"Rect"},{"attributes":{"source":{"id":"10433"}},"id":"10461","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10454"}]},"id":"10455","type":"Toolbar"},{"attributes":{"below":[{"id":"10446"}],"center":[{"id":"10449"},{"id":"10453"}],"height":400,"left":[{"id":"10450"}],"renderers":[{"id":"10460"}],"title":{"id":"10436"},"toolbar":{"id":"10455"},"toolbar_location":null,"width":400,"x_range":{"id":"10438"},"x_scale":{"id":"10442"},"y_range":{"id":"10440"},"y_scale":{"id":"10444"}},"id":"10435","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"10440","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10434"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10459","type":"Rect"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10434","type":"LinearColorMapper"},{"attributes":{},"id":"10444","type":"LinearScale"},{"attributes":{},"id":"10469","type":"Selection"},{"attributes":{},"id":"10447","type":"BasicTicker"},{"attributes":{},"id":"10467","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10433"},"glyph":{"id":"10458"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10459"},"view":{"id":"10461"}},"id":"10460","type":"GlyphRenderer"},{"attributes":{},"id":"10470","type":"UnionRenderers"},{"attributes":{"end":6},"id":"10438","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10464"},"major_label_policy":{"id":"10465"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10447"}},"id":"10446","type":"LinearAxis"},{"attributes":{},"id":"10468","type":"AllLabels"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10467"},"major_label_policy":{"id":"10468"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10451"}},"id":"10450","type":"LinearAxis"},{"attributes":{"axis":{"id":"10446"},"ticker":null,"visible":false},"id":"10449","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"9RmrKPl7iUAIF5dPO3WJQG1Oykn9colAAtNp3bZ3iUCM1CBxVHSJQP7UeOnWcIlA/cxqy1p1iUB75wb5n8WJQFjfZStkw4lAUOJzJyjBiUCDoEicOsaJQEHR4caywolA+ByzRwO/iUCtNlpp3cOJQEn9UMS9E4pARV/m4E4MikDID/D/Tg+KQC3CXnLNFIpAqpog6p4XikD5+N+lLw2KQF2gSQdgEopAHaeNj9thikCJaCp6ll+KQJzVp8FpXYpA2ON0SGBjikA7NgLxWmaKQPRAGgRcW4pADQo5peJgikCnXhLC/q+KQOtt2FufrYpAcZtfg4SrikCJmX0e87GKQNNl1vcWtYpA7ohUYoipikDDBxtDZa+KQPXNR2N++IpAUwd5Paj7ikBDg17JT/OKQDO7k/SFAItAapWq/tIDi0DvZIHAtPeKQHNxCuHn/YpAuf/IdFhGi0C7oBkfsUmLQAD3hgwVQYtA3typyhhPi0ACxX4Fj1KLQOqsux7hRYtAI9v5fmpMi0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10469"},"selection_policy":{"id":"10470"}},"id":"10433","type":"ColumnDataSource"},{"attributes":{},"id":"10464","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10450"},"dimension":1,"ticker":null,"visible":false},"id":"10453","type":"Grid"},{"attributes":{},"id":"10451","type":"BasicTicker"}],"root_ids":["10435"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"fe2c64e2-65c2-448e-83fd-ce49eb36679a","root_ids":["10435"],"roots":{"10435":"7db6ab20-ecb2-49b0-a46f-39d056b624fd"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"97b9ef70-fe68-4d92-b02a-73edb01d2d5c":{"defs":[],"roots":{"references":[{"attributes":{"text":"Thunder Bay \\u2192 Cleveland"},"id":"10474","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10492","type":"HoverTool"},{"attributes":{},"id":"10480","type":"LinearScale"},{"attributes":{"source":{"id":"10471"}},"id":"10499","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10492"}]},"id":"10493","type":"Toolbar"},{"attributes":{"end":6},"id":"10478","type":"Range1d"},{"attributes":{},"id":"10507","type":"Selection"},{"attributes":{},"id":"10482","type":"LinearScale"},{"attributes":{},"id":"10505","type":"BasicTickFormatter"},{"attributes":{},"id":"10485","type":"BasicTicker"},{"attributes":{"data_source":{"id":"10471"},"glyph":{"id":"10496"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10497"},"view":{"id":"10499"}},"id":"10498","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10472"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10496","type":"Rect"},{"attributes":{},"id":"10508","type":"UnionRenderers"},{"attributes":{},"id":"10506","type":"AllLabels"},{"attributes":{"below":[{"id":"10484"}],"center":[{"id":"10487"},{"id":"10491"}],"height":400,"left":[{"id":"10488"}],"renderers":[{"id":"10498"}],"title":{"id":"10474"},"toolbar":{"id":"10493"},"toolbar_location":null,"width":400,"x_range":{"id":"10476"},"x_scale":{"id":"10480"},"y_range":{"id":"10478"},"y_scale":{"id":"10482"}},"id":"10473","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"10476","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10472","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10502"},"major_label_policy":{"id":"10503"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10485"}},"id":"10484","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10505"},"major_label_policy":{"id":"10506"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10489"}},"id":"10488","type":"LinearAxis"},{"attributes":{"axis":{"id":"10484"},"ticker":null,"visible":false},"id":"10487","type":"Grid"},{"attributes":{},"id":"10502","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"d/S/XKu6kUBeFD3wwbmRQM4WEFp/qJFAYFj+fLunkUCp29lXPqiRQPyp8dKNlZFAUkMbgA2okUCZEkn0QgGSQL0aoDSU75FAEVX4M0zdkUDejQWFgdyRQPYoXI+CyZFAVOBkG2jJkUBv9Zz07tyRQMnH7gI1OJJAHSEDeWYlkkBTk+ANGRKSQDvfT41HEZJAQgqeQi79kUDO+pRjQv2RQIunHmnQEZJA2ZjXESdvkkBbQ6m9OFuSQJbRyOflRpJAmDCalQ1GkkBsByP22TCSQC/dJAYBR5JAp1mg3bFGkkCzJhb4KpKSQLpJDAILkZJA2A+xwbJ7kkAXZqGd03qSQLjoZKmFZJJArkhMUPN7kkDECyJSk3uSQD0K16MQyJJAGlBvRt3GkkAaTpmbf7CSQHS366WZr5JA4uXpXDGYkkCiQnVzoZiSQOC9o8Z0sJJAFEIHXQL+kkBYchWLr/ySQF2MgXVM5ZJA0Qg2rl/kkkAuxysQ3cuSQIlFDDtMzJJA24toO1blkkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10507"},"selection_policy":{"id":"10508"}},"id":"10471","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"10488"},"dimension":1,"ticker":null,"visible":false},"id":"10491","type":"Grid"},{"attributes":{},"id":"10489","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10472"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10497","type":"Rect"},{"attributes":{},"id":"10503","type":"AllLabels"}],"root_ids":["10473"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"97b9ef70-fe68-4d92-b02a-73edb01d2d5c","root_ids":["10473"],"roots":{"10473":"e03c54fb-ad73-40e3-bfc1-5d0e47d120cb"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"d01bd817-c5d4-47d1-9d37-41d0e3c97cbb":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"10509"}},"id":"10537","type":"CDSView"},{"attributes":{"end":6},"id":"10516","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10510"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10535","type":"Rect"},{"attributes":{},"id":"10520","type":"LinearScale"},{"attributes":{},"id":"10523","type":"BasicTicker"},{"attributes":{},"id":"10543","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10509"},"glyph":{"id":"10534"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10535"},"view":{"id":"10537"}},"id":"10536","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10510"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10534","type":"Rect"},{"attributes":{"end":6},"id":"10514","type":"Range1d"},{"attributes":{"below":[{"id":"10522"}],"center":[{"id":"10525"},{"id":"10529"}],"height":400,"left":[{"id":"10526"}],"renderers":[{"id":"10536"}],"title":{"id":"10512"},"toolbar":{"id":"10531"},"toolbar_location":null,"width":400,"x_range":{"id":"10514"},"x_scale":{"id":"10518"},"y_range":{"id":"10516"},"y_scale":{"id":"10520"}},"id":"10511","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"10530"}]},"id":"10531","type":"Toolbar"},{"attributes":{},"id":"10544","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10510","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10540"},"major_label_policy":{"id":"10541"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10523"}},"id":"10522","type":"LinearAxis"},{"attributes":{},"id":"10545","type":"Selection"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10543"},"major_label_policy":{"id":"10544"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10527"}},"id":"10526","type":"LinearAxis"},{"attributes":{},"id":"10546","type":"UnionRenderers"},{"attributes":{"axis":{"id":"10522"},"ticker":null,"visible":false},"id":"10525","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"rImqBBB5jEDxHlZuyI6MQJ8OGrBqo4xAqWSl7k+4jEDAwpMn6rmMQMazFUUJ14xASMkGLX8IjUBcj8L1yMOMQN9PjZfu2oxANdgvM9fwjEASo+cWCgeNQEJo8+6uCI1AIIAv4KAnjUC1EInnYVyNQAyV2uaBDo1AzoDEwBQnjUASg8DKQT6NQIJ1HD/EVY1Ay6FFtnNXjUB6TEl7OHiNQCNYC6JEsI1Awy7l1zpZjUC2HQnqOnONQPAtUWKsi41A6rNeZ36kjUBT25d9OKaNQM2EcBbQyI1AkJ+NXCcEjkD5jJ8h56ONQKVOQBNhv41A1GzU+RbZjUBahpOPOPONQNWA90T99I1AJ1GKsWcZjkD+5g8XCliOQBZGH5ho7o1Ak393PIcLjkCyF2WRgSaOQMPE1bfyQY5AXrpJDMJDjkCBHaRM/2mOQGsuktHsq45ANP+eDuo4jkD4U+Olm1eOQI/C9Sjsc45ALAMY4KyQjkDn85vThpKOQNvpveeWuo5A0uEhjM//jkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10545"},"selection_policy":{"id":"10546"}},"id":"10509","type":"ColumnDataSource"},{"attributes":{},"id":"10540","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10526"},"dimension":1,"ticker":null,"visible":false},"id":"10529","type":"Grid"},{"attributes":{},"id":"10527","type":"BasicTicker"},{"attributes":{},"id":"10541","type":"AllLabels"},{"attributes":{"text":"Thunder Bay \\u2192 Detroit"},"id":"10512","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10530","type":"HoverTool"},{"attributes":{},"id":"10518","type":"LinearScale"}],"root_ids":["10511"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"d01bd817-c5d4-47d1-9d37-41d0e3c97cbb","root_ids":["10511"],"roots":{"10511":"02f0705e-88f8-4398-bc1b-4a9dd6da8da1"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"23ea271e-1047-4afc-af24-b05360ad665d":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10561","type":"BasicTicker"},{"attributes":{},"id":"10558","type":"LinearScale"},{"attributes":{},"id":"10581","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10547"},"glyph":{"id":"10572"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10573"},"view":{"id":"10575"}},"id":"10574","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"10560"}],"center":[{"id":"10563"},{"id":"10567"}],"height":400,"left":[{"id":"10564"}],"renderers":[{"id":"10574"}],"title":{"id":"10550"},"toolbar":{"id":"10569"},"toolbar_location":null,"width":400,"x_range":{"id":"10552"},"x_scale":{"id":"10556"},"y_range":{"id":"10554"},"y_scale":{"id":"10558"}},"id":"10549","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10582","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10548","type":"LinearColorMapper"},{"attributes":{"end":6},"id":"10554","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"Y8OJngoIckDFzm/zYVNyQJqZmZmZj3JA8iN+xTrPckByQ50DNfJyQC21OSmn5nJA4PYEic3sckCLDSd6KkpyQIwap3yjmnJAp7uh3w3bckB1ivrJHRRzQKBAjpz7RHNA9oDUgWc5c0A7JdaYJkBzQMF/qVVKjHJAUmbeBeXhckC03aklgiZzQNAHcB8+Y3NAzj1/NcKXc0DMdFTaJ4xzQJdTp6h/k3NA6clGMWrOckAZshWPJilzQL/oPHTrfHNAOK3KdF6yc0Az6hDuRLxzQJVA7zLo3nNA8oF4uNjmc0DPrFvzORBzQOD9TBhocHNAoedgRw3Jc0CgUiXKfgF0QDDfVWqxDHRAazRvi6gxdEBb2C7IMTp0QGYAA5y5UXNApkmEoam3c0B3vp8aLxV0QPrPmh+fUHRALNSa5h1ddEA0AArkaIR0QLYGANiKjXRA/FOqRDmTc0Btlbsq6/5zQEyV3u1QYXRAY3X1dL+fdEApyd9iiq10QP3LpDwp13RAETXR5+PgdEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10583"},"selection_policy":{"id":"10584"}},"id":"10547","type":"ColumnDataSource"},{"attributes":{"text":"Thunder Bay \\u2192 Duluth"},"id":"10550","type":"Title"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10578"},"major_label_policy":{"id":"10579"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10561"}},"id":"10560","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10581"},"major_label_policy":{"id":"10582"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10565"}},"id":"10564","type":"LinearAxis"},{"attributes":{"axis":{"id":"10560"},"ticker":null,"visible":false},"id":"10563","type":"Grid"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10548"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10572","type":"Rect"},{"attributes":{},"id":"10578","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10564"},"dimension":1,"ticker":null,"visible":false},"id":"10567","type":"Grid"},{"attributes":{},"id":"10565","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10548"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10573","type":"Rect"},{"attributes":{},"id":"10579","type":"AllLabels"},{"attributes":{},"id":"10583","type":"Selection"},{"attributes":{"end":6},"id":"10552","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10568","type":"HoverTool"},{"attributes":{},"id":"10556","type":"LinearScale"},{"attributes":{"source":{"id":"10547"}},"id":"10575","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10568"}]},"id":"10569","type":"Toolbar"},{"attributes":{},"id":"10584","type":"UnionRenderers"}],"root_ids":["10549"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"23ea271e-1047-4afc-af24-b05360ad665d","root_ids":["10549"],"roots":{"10549":"9b69da93-1d98-431a-9053-38df19cddc76"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"59042480-a6a0-470b-85d1-346fb51ce88e":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10616"},"major_label_policy":{"id":"10617"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10599"}},"id":"10598","type":"LinearAxis"},{"attributes":{},"id":"10619","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10585"},"glyph":{"id":"10610"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10611"},"view":{"id":"10613"}},"id":"10612","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"10598"},"ticker":null,"visible":false},"id":"10601","type":"Grid"},{"attributes":{},"id":"10596","type":"LinearScale"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10586"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10610","type":"Rect"},{"attributes":{},"id":"10603","type":"BasicTicker"},{"attributes":{"below":[{"id":"10598"}],"center":[{"id":"10601"},{"id":"10605"}],"height":400,"left":[{"id":"10602"}],"renderers":[{"id":"10612"}],"title":{"id":"10588"},"toolbar":{"id":"10607"},"toolbar_location":null,"width":400,"x_range":{"id":"10590"},"x_scale":{"id":"10594"},"y_range":{"id":"10592"},"y_scale":{"id":"10596"}},"id":"10587","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10620","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10586","type":"LinearColorMapper"},{"attributes":{},"id":"10599","type":"BasicTicker"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10619"},"major_label_policy":{"id":"10620"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10603"}},"id":"10602","type":"LinearAxis"},{"attributes":{"end":6},"id":"10590","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10606","type":"HoverTool"},{"attributes":{"data":{"val":{"__ndarray__":"lBRYALNzkUDJkjmWR2WRQNNNYhD4XZFAhllo5wRekUB6Nqs+J16RQMiXUMGBapFAns+AepNzkUBYVMTpZKaRQPzepj8Ll5FAWmJlNCKPkUAsnKT5I4+RQOfhBKZDj5FAexSuR2GckUD4UQ37HaaRQOAw0SAl2ZFA0bLuH8vMkUDidmhYTMCRQPTCnQtDwJFAdnEbDWDAkUAukQvOQM6RQHO4Vnuo2JFA2GX4T3f/kUBFhH8RNASSQItvKHx28ZFAvOmWHWLxkUDjHHV0fPGRQALyJVQgAJJAzTrj+zILkkC++njoSzGSQCgqG9bUJZJAwvf+Bg0ykkCEEJAvgSKSQHGsi9uYIpJAtW6D2v8xkkBJoSx8vT2SQKOP+YAgY5JAPj+MEC5XkkAN/n4xm1OSQEw3iUGgU5JAADyiQrVTkkBo6+Bg32OSQKMjufxHcJJAxF4oYPuUkkB2OLpKh4iSQL1zKEOlhJJAFF6CU7+EkkBt5/up0YSSQBtoPue+lZJA/KVFfdKikkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10621"},"selection_policy":{"id":"10622"}},"id":"10585","type":"ColumnDataSource"},{"attributes":{"end":6},"id":"10592","type":"Range1d"},{"attributes":{"text":"Thunder Bay \\u2192 Hamilton"},"id":"10588","type":"Title"},{"attributes":{},"id":"10616","type":"BasicTickFormatter"},{"attributes":{},"id":"10622","type":"UnionRenderers"},{"attributes":{},"id":"10617","type":"AllLabels"},{"attributes":{},"id":"10621","type":"Selection"},{"attributes":{"axis":{"id":"10602"},"dimension":1,"ticker":null,"visible":false},"id":"10605","type":"Grid"},{"attributes":{"source":{"id":"10585"}},"id":"10613","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10586"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10611","type":"Rect"},{"attributes":{},"id":"10594","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"10606"}]},"id":"10607","type":"Toolbar"}],"root_ids":["10587"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"59042480-a6a0-470b-85d1-346fb51ce88e","root_ids":["10587"],"roots":{"10587":"a16cee28-a5bb-4074-930e-84a36d3576ce"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"852bb2d1-eb95-4a4f-9439-d107dcf63671":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"10644"}]},"id":"10645","type":"Toolbar"},{"attributes":{},"id":"10658","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10644","type":"HoverTool"},{"attributes":{"data":{"val":{"__ndarray__":"UP7uHVXyhkDm4ansMPKGQJHlbiHp6IZAtr5IaMvohkDMGDCS1+6GQLFkMywb6IZAOpLLf0jZhkBToXAsTj6HQEw3iUHgPYdAqenEL4Y6h0A730+NlzOHQK8LmvEhOodA/mcoSQIzh0BI4XoULiOHQEjP4+bKkIdAsYxolo+Jh0CjaC/syoWHQMH/VrJjfodAo15LIwF+h0BLax1m6X2HQFUwKqkTbYdAM7z+ySTdh0AX4kfrPtWHQJ3nmagP0YdAxY8xd+3Qh0BGHcKd4MiHQJhuEoPQyIdAY3/ZPfm2h0AYFSetfimIQHw3J0DuIIhAkvWKXWEciED/snvyMByIQONHRhjAE4hAj8L1KJwTiEBwzojS3gCIQBbrZSW3dYhA4owGlZ1siEDhcgaQu2eIQDnWxW10Z4hAf3LKkp9eiEAhHcMIZl6IQH4dOGfESohAQfqBBubBiEA6xrpdlMCIQClcj8IVs4hAcvkP6beyiEAjMUENf6mIQKvjnegvqYhAi2zn+6mUiEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10659"},"selection_policy":{"id":"10660"}},"id":"10623","type":"ColumnDataSource"},{"attributes":{},"id":"10654","type":"BasicTickFormatter"},{"attributes":{"text":"Thunder Bay \\u2192 Milwaukee"},"id":"10626","type":"Title"},{"attributes":{},"id":"10632","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10624"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10649","type":"Rect"},{"attributes":{},"id":"10641","type":"BasicTicker"},{"attributes":{"end":6},"id":"10630","type":"Range1d"},{"attributes":{"axis":{"id":"10636"},"ticker":null,"visible":false},"id":"10639","type":"Grid"},{"attributes":{},"id":"10659","type":"Selection"},{"attributes":{},"id":"10655","type":"AllLabels"},{"attributes":{},"id":"10634","type":"LinearScale"},{"attributes":{},"id":"10637","type":"BasicTicker"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10657"},"major_label_policy":{"id":"10658"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10641"}},"id":"10640","type":"LinearAxis"},{"attributes":{"axis":{"id":"10640"},"dimension":1,"ticker":null,"visible":false},"id":"10643","type":"Grid"},{"attributes":{"source":{"id":"10623"}},"id":"10651","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10624"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10648","type":"Rect"},{"attributes":{},"id":"10660","type":"UnionRenderers"},{"attributes":{"below":[{"id":"10636"}],"center":[{"id":"10639"},{"id":"10643"}],"height":400,"left":[{"id":"10640"}],"renderers":[{"id":"10650"}],"title":{"id":"10626"},"toolbar":{"id":"10645"},"toolbar_location":null,"width":400,"x_range":{"id":"10628"},"x_scale":{"id":"10632"},"y_range":{"id":"10630"},"y_scale":{"id":"10634"}},"id":"10625","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"10628","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10624","type":"LinearColorMapper"},{"attributes":{},"id":"10657","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10623"},"glyph":{"id":"10648"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10649"},"view":{"id":"10651"}},"id":"10650","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10654"},"major_label_policy":{"id":"10655"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10637"}},"id":"10636","type":"LinearAxis"}],"root_ids":["10625"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"852bb2d1-eb95-4a4f-9439-d107dcf63671","root_ids":["10625"],"roots":{"10625":"bf067c8c-6e64-44e9-bda7-f48eb0729a52"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"7c93849f-9c02-4dfd-bbf0-729de4c0fce7":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"10661"},"glyph":{"id":"10686"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10687"},"view":{"id":"10689"}},"id":"10688","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"10678"},"dimension":1,"ticker":null,"visible":false},"id":"10681","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"10682"}]},"id":"10683","type":"Toolbar"},{"attributes":{},"id":"10679","type":"BasicTicker"},{"attributes":{},"id":"10692","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"3NYWnlfpk0CWCiqq7t2TQOZciqta1ZNAn48y4vLik0BjRQ2mIeuTQEUqjC3k8JNAA9GTMmn/k0DzGyYa5CyUQOLkfofyEpRAL6UuGecJlECdnndjYRiUQJJc/kMaIZRAXATG+mYnlEAWTWcn0zaUQICdmzZzY5RAL7/TZPZHlECR0QFJiEyUQJutvOTPTZRAqKlla31QlEBy3v/H6V2UQAjlfRw9bpRALgPOUgKalEB8mShC+nyUQDEIrBzKgZRA0jk/xaF8lEDUYBqGL4aUQIi4OZVslJRAHGFREaellEC6hENvkdCUQMlzfR/+sZRA0T5W8Au3lEDoa5bLtrGUQAEYz6Dhu5RAn5JzYu/KlEAv3SQGEd2UQGjqdYsgB5VA68n8o0/8lEBxdQDETeyUQP6d7dHL5pRALc+Du5PxlEDXUGovcgGVQENZ+Pp6FJVAFlCop689lUAfZFkwUTKVQBGsqpePIZVANbQB2OAblUBZhjjWRSeVQO0qpPz0N5VAVtXL7+RLlUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10697"},"selection_policy":{"id":"10698"}},"id":"10661","type":"ColumnDataSource"},{"attributes":{"text":"Thunder Bay \\u2192 Montreal"},"id":"10664","type":"Title"},{"attributes":{},"id":"10670","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10682","type":"HoverTool"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10662"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10686","type":"Rect"},{"attributes":{},"id":"10693","type":"AllLabels"},{"attributes":{"end":6},"id":"10668","type":"Range1d"},{"attributes":{},"id":"10697","type":"Selection"},{"attributes":{},"id":"10672","type":"LinearScale"},{"attributes":{"source":{"id":"10661"}},"id":"10689","type":"CDSView"},{"attributes":{},"id":"10675","type":"BasicTicker"},{"attributes":{},"id":"10698","type":"UnionRenderers"},{"attributes":{"end":6},"id":"10666","type":"Range1d"},{"attributes":{"below":[{"id":"10674"}],"center":[{"id":"10677"},{"id":"10681"}],"height":400,"left":[{"id":"10678"}],"renderers":[{"id":"10688"}],"title":{"id":"10664"},"toolbar":{"id":"10683"},"toolbar_location":null,"width":400,"x_range":{"id":"10666"},"x_scale":{"id":"10670"},"y_range":{"id":"10668"},"y_scale":{"id":"10672"}},"id":"10663","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10695","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10662"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10687","type":"Rect"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10662","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10692"},"major_label_policy":{"id":"10693"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10675"}},"id":"10674","type":"LinearAxis"},{"attributes":{"axis":{"id":"10674"},"ticker":null,"visible":false},"id":"10677","type":"Grid"},{"attributes":{},"id":"10696","type":"AllLabels"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10695"},"major_label_policy":{"id":"10696"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10679"}},"id":"10678","type":"LinearAxis"}],"root_ids":["10663"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"7c93849f-9c02-4dfd-bbf0-729de4c0fce7","root_ids":["10663"],"roots":{"10663":"ebfcd014-8ff7-4fe7-8bd6-6a5883596568"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"e76406d3-40a2-455a-94e2-47e1aa145fd1":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10717","type":"BasicTicker"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10700","type":"LinearColorMapper"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10700"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10725","type":"Rect"},{"attributes":{},"id":"10734","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10700"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10724","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10720","type":"HoverTool"},{"attributes":{"source":{"id":"10699"}},"id":"10727","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10720"}]},"id":"10721","type":"Toolbar"},{"attributes":{},"id":"10735","type":"Selection"},{"attributes":{},"id":"10731","type":"AllLabels"},{"attributes":{"text":"Thunder Bay \\u2192 Toledo"},"id":"10702","type":"Title"},{"attributes":{"below":[{"id":"10712"}],"center":[{"id":"10715"},{"id":"10719"}],"height":400,"left":[{"id":"10716"}],"renderers":[{"id":"10726"}],"title":{"id":"10702"},"toolbar":{"id":"10721"},"toolbar_location":null,"width":400,"x_range":{"id":"10704"},"x_scale":{"id":"10708"},"y_range":{"id":"10706"},"y_scale":{"id":"10710"}},"id":"10701","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10733","type":"BasicTickFormatter"},{"attributes":{},"id":"10708","type":"LinearScale"},{"attributes":{"data_source":{"id":"10699"},"glyph":{"id":"10724"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10725"},"view":{"id":"10727"}},"id":"10726","type":"GlyphRenderer"},{"attributes":{},"id":"10736","type":"UnionRenderers"},{"attributes":{"end":6},"id":"10706","type":"Range1d"},{"attributes":{},"id":"10710","type":"LinearScale"},{"attributes":{},"id":"10713","type":"BasicTicker"},{"attributes":{"end":6},"id":"10704","type":"Range1d"},{"attributes":{"data":{"val":{"__ndarray__":"F47WB3jwjUDGounsZN2NQNvwBXdR4Y1A2G/cGAHvjUB92MF3wRSOQNNNYhCYO45A016OaAxojkAJL2bwnD+OQABvgQRFK45AOzQsRo0vjkBThIpgwj2OQNNNYhDYZY5Alk+gmaGOjkBiQavdkL2OQKUYe4r3jo5AOjsZHCV5jkCcd1IVyX2OQM6YOKiDjI5AKcMCqe62jkBg5dAiq+GOQPEjyFIVE49ASJaCJFLejkC4zOmyGMeOQP26eOQEzI5ASa3m70TbjkB4pLBBBQiPQCTnDqy0NI9AlMK8x5loj0DrE4q+rC2PQC5zuiwmFY9AXf6es0Aaj0DEwZQ3BiqPQM4ZUdobWY9A7nw/Nb6Hj0ABwRw9Hr6PQIf9nlgHfY9ApBmLpjNjj0DS/ZyCfGiPQCoaa3/HeI9AOEvJcjKqj0DFOlW+x9qPQNlD+1jRCZBAMA+Z8mHMj0AawFsgQbGPQB+F61G4to9ApS4Zx4jHj0BftMcLSfuPQC2Y+KPoFpBAD0Ork5M0kEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10735"},"selection_policy":{"id":"10736"}},"id":"10699","type":"ColumnDataSource"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10730"},"major_label_policy":{"id":"10731"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10713"}},"id":"10712","type":"LinearAxis"},{"attributes":{},"id":"10730","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10733"},"major_label_policy":{"id":"10734"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10717"}},"id":"10716","type":"LinearAxis"},{"attributes":{"axis":{"id":"10712"},"ticker":null,"visible":false},"id":"10715","type":"Grid"},{"attributes":{"axis":{"id":"10716"},"dimension":1,"ticker":null,"visible":false},"id":"10719","type":"Grid"}],"root_ids":["10701"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"e76406d3-40a2-455a-94e2-47e1aa145fd1","root_ids":["10701"],"roots":{"10701":"20876de4-f048-44b7-bdf4-5c76b7d3169c"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"696421fc-a32b-4989-ac37-20d97f13fea9":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10746","type":"LinearScale"},{"attributes":{"source":{"id":"10737"}},"id":"10765","type":"CDSView"},{"attributes":{"end":6},"id":"10744","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10738"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10763","type":"Rect"},{"attributes":{},"id":"10748","type":"LinearScale"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10738"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10762","type":"Rect"},{"attributes":{},"id":"10773","type":"Selection"},{"attributes":{},"id":"10751","type":"BasicTicker"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10738","type":"LinearColorMapper"},{"attributes":{},"id":"10771","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"10750"}],"center":[{"id":"10753"},{"id":"10757"}],"height":400,"left":[{"id":"10754"}],"renderers":[{"id":"10764"}],"title":{"id":"10740"},"toolbar":{"id":"10759"},"toolbar_location":null,"width":400,"x_range":{"id":"10742"},"x_scale":{"id":"10746"},"y_range":{"id":"10744"},"y_scale":{"id":"10748"}},"id":"10739","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"10737"},"glyph":{"id":"10762"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10763"},"view":{"id":"10765"}},"id":"10764","type":"GlyphRenderer"},{"attributes":{},"id":"10774","type":"UnionRenderers"},{"attributes":{"end":6},"id":"10742","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10758","type":"HoverTool"},{"attributes":{},"id":"10772","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10768"},"major_label_policy":{"id":"10769"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10751"}},"id":"10750","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10771"},"major_label_policy":{"id":"10772"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10755"}},"id":"10754","type":"LinearAxis"},{"attributes":{"axis":{"id":"10750"},"ticker":null,"visible":false},"id":"10753","type":"Grid"},{"attributes":{},"id":"10768","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10754"},"dimension":1,"ticker":null,"visible":false},"id":"10757","type":"Grid"},{"attributes":{},"id":"10755","type":"BasicTicker"},{"attributes":{},"id":"10769","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"10758"}]},"id":"10759","type":"Toolbar"},{"attributes":{"data":{"val":{"__ndarray__":"1As+zbm1kUB01NFxBbCRQGba/pXlqJFAD313K3unkUD6t8t+rZWRQJHtfD+Vj5FATRB1H5CKkUCu78NB8vaRQGcqxCPx5ZFACks8oEzekUCez4B609yRQLiRskXiyZFAPGh23Qu4kUAGLSRgRL6RQFLzVfIRLpJAWoC21dwbkkCuu3mqsxOSQIhodAfRBZJA+kMzTy7+kUBTCU/oReuRQOAtkKD48ZFAHt0Ii/pYkkBvumWHyFGSQFIst7QaSZJASPq0in46kkAbEvdYejKSQEfGavN/HpJAui784KwlkkCM2v0qUI+SQGIQWDm0h5JA9Zz0voF+kkCtpYC0L2+SQF3Ed2LGZpJAPIOG/rlRkkBzS6shYVmSQNjzNculxZJAvCGNCjyvkkCZDTLJ6LOSQBFRTN7go5JAgbT/AcaMkkAfhetRCIWSQE1MF2IVjZJARfEqa/v7kkAQdLSqVeSSQD1+b9NP6ZJAdvwXCJLYkkB3SZwVUcCSQAq8k09fuJJAJ02DosnAkkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10773"},"selection_policy":{"id":"10774"}},"id":"10737","type":"ColumnDataSource"},{"attributes":{"text":"Thunder Bay \\u2192 Toronto"},"id":"10740","type":"Title"}],"root_ids":["10739"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"696421fc-a32b-4989-ac37-20d97f13fea9","root_ids":["10739"],"roots":{"10739":"29541e40-7ac3-4d33-81e7-11aeae307cb6"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"d61dc640-c144-4282-bd56-ef5c0538a7f2":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"10782","type":"Range1d"},{"attributes":{},"id":"10811","type":"Selection"},{"attributes":{},"id":"10786","type":"LinearScale"},{"attributes":{},"id":"10809","type":"BasicTickFormatter"},{"attributes":{},"id":"10789","type":"BasicTicker"},{"attributes":{"data_source":{"id":"10775"},"glyph":{"id":"10800"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10801"},"view":{"id":"10803"}},"id":"10802","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10776"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10800","type":"Rect"},{"attributes":{},"id":"10812","type":"UnionRenderers"},{"attributes":{},"id":"10810","type":"AllLabels"},{"attributes":{"below":[{"id":"10788"}],"center":[{"id":"10791"},{"id":"10795"}],"height":400,"left":[{"id":"10792"}],"renderers":[{"id":"10802"}],"title":{"id":"10778"},"toolbar":{"id":"10797"},"toolbar_location":null,"width":400,"x_range":{"id":"10780"},"x_scale":{"id":"10784"},"y_range":{"id":"10782"},"y_scale":{"id":"10786"}},"id":"10777","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"10780","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10776","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10806"},"major_label_policy":{"id":"10807"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10789"}},"id":"10788","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10809"},"major_label_policy":{"id":"10810"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10793"}},"id":"10792","type":"LinearAxis"},{"attributes":{"axis":{"id":"10788"},"ticker":null,"visible":false},"id":"10791","type":"Grid"},{"attributes":{},"id":"10806","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"KZ2j6QfujUCMIUrFcNiNQIGVQ4ts341AQongyZjmjUDWRFUCKO6NQGYc2UvZ1I1AxtbYyuDnjUBaidQPNUiOQB6kp8ixQI5ASnuDL8w4jkBTuqqiTkCOQI/C9ShcSI5ApAo1+cwtjkC1T8dj1kGOQJEJ+DVioo5AjQKOTneajkATYcPTK5KOQIPo/wsKmo5ASUCWT5CijkDaZJ6mwIaOQJ40w/zLm45Aw/UoXI/8jkD7YHTUPPSOQNxGA3iL645AFDe4vtnzjkACvjZ2xPyOQBhT+lO0345Aja2xlcH1jkDbiZKQSEWPQGMraFoCTo9Ay9sRTgtXj0Cd8X1xqU2PQLWn5Jz4Vo9A5KHvboVMj0CWdmout0+PQESLbOebno9Aw2Fp4Menj0AU0ETYMJ6PQDXUKCR5p49AguFcwyyxj0A9SbpmMqaPQGufjsesqY9ArIxGPu/3j0ASTDWzxgCQQDPEsS5u949AZttpa6QAkECojep0sAWQQFIoC1/f/49AH2RZMNEBkEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10811"},"selection_policy":{"id":"10812"}},"id":"10775","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"10792"},"dimension":1,"ticker":null,"visible":false},"id":"10795","type":"Grid"},{"attributes":{},"id":"10793","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10776"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10801","type":"Rect"},{"attributes":{},"id":"10807","type":"AllLabels"},{"attributes":{"text":"Thunder Bay \\u2192 Windsor"},"id":"10778","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10796","type":"HoverTool"},{"attributes":{},"id":"10784","type":"LinearScale"},{"attributes":{"source":{"id":"10775"}},"id":"10803","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10796"}]},"id":"10797","type":"Toolbar"}],"root_ids":["10777"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"d61dc640-c144-4282-bd56-ef5c0538a7f2","root_ids":["10777"],"roots":{"10777":"a2d0b235-b9a5-4a3d-9879-c7498e8afbb2"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"540e7886-93d8-44ce-b66f-587606325ee7":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10827","type":"BasicTicker"},{"attributes":{},"id":"10847","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10813"},"glyph":{"id":"10838"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10839"},"view":{"id":"10841"}},"id":"10840","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10814"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10838","type":"Rect"},{"attributes":{"end":6},"id":"10818","type":"Range1d"},{"attributes":{"below":[{"id":"10826"}],"center":[{"id":"10829"},{"id":"10833"}],"height":400,"left":[{"id":"10830"}],"renderers":[{"id":"10840"}],"title":{"id":"10816"},"toolbar":{"id":"10835"},"toolbar_location":null,"width":400,"x_range":{"id":"10818"},"x_scale":{"id":"10822"},"y_range":{"id":"10820"},"y_scale":{"id":"10824"}},"id":"10815","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10848","type":"AllLabels"},{"attributes":{},"id":"10850","type":"UnionRenderers"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10814","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10844"},"major_label_policy":{"id":"10845"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10827"}},"id":"10826","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10847"},"major_label_policy":{"id":"10848"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10831"}},"id":"10830","type":"LinearAxis"},{"attributes":{"axis":{"id":"10826"},"ticker":null,"visible":false},"id":"10829","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"cIc8OG4Yc0CKXMu/kRpzQCsTfqmfJ3NATEl7KDYsc0AJZSt5JjxzQBj0OdKUi3NAppvEIJDRc0DnRdxSnVFzQHr5Qm0AVHNA+aBns+phc0BzxXvEvmZzQAan9AKid3NAuS6hJ2rMc0CF61G4Hhd0QHScNj6ObHNAMPiP4EGNc0DHLlG9NZxzQKdpYWBHoXNABOm9jB2zc0Boke18Pw10QGQ730+tXHRAvp8aL92jc0DZzvdTg8ZzQJS8OseA1nNAzuVh/M/bc0ACK4cWme5zQBj0OdIUTnRARIts5zuidEAJo/4fLNtzQIKlX8fE/3NAW3wKgPHwc0ACikeYWBZ0QABtUKAUKnRAuS6hJ+qOdEAj2/l+yud0QEZ+/RB7EnRAOKSsOgY5dEB2bATidSl0QCkGSDThUHRA/q4ZKpBldEBoke18v890QAIrhxZZLXVAkIHhAcpJdEDhehSuR3J0QJJc/kP6YXRAXaot0GmLdED88OKzC6F0QBj0OdKUEHVA4XoUrudydUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10849"},"selection_policy":{"id":"10850"}},"id":"10813","type":"ColumnDataSource"},{"attributes":{},"id":"10844","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10830"},"dimension":1,"ticker":null,"visible":false},"id":"10833","type":"Grid"},{"attributes":{},"id":"10831","type":"BasicTicker"},{"attributes":{},"id":"10845","type":"AllLabels"},{"attributes":{},"id":"10849","type":"Selection"},{"attributes":{"text":"Toledo \\u2192 Chicago"},"id":"10816","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10834","type":"HoverTool"},{"attributes":{},"id":"10822","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"10834"}]},"id":"10835","type":"Toolbar"},{"attributes":{"source":{"id":"10813"}},"id":"10841","type":"CDSView"},{"attributes":{"end":6},"id":"10820","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10814"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10839","type":"Rect"},{"attributes":{},"id":"10824","type":"LinearScale"}],"root_ids":["10815"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"540e7886-93d8-44ce-b66f-587606325ee7","root_ids":["10815"],"roots":{"10815":"6bee6f0b-87bf-4c1d-8d92-36ddee02d453"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"495f3175-bd52-49b0-97ad-99f8cee055cc":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"field":"val","transform":{"id":"10852"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10876","type":"Rect"},{"attributes":{"text":"Toledo \\u2192 Cleveland"},"id":"10854","type":"Title"},{"attributes":{},"id":"10860","type":"LinearScale"},{"attributes":{"below":[{"id":"10864"}],"center":[{"id":"10867"},{"id":"10871"}],"height":400,"left":[{"id":"10868"}],"renderers":[{"id":"10878"}],"title":{"id":"10854"},"toolbar":{"id":"10873"},"toolbar_location":null,"width":400,"x_range":{"id":"10856"},"x_scale":{"id":"10860"},"y_range":{"id":"10858"},"y_scale":{"id":"10862"}},"id":"10853","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10886","type":"AllLabels"},{"attributes":{"end":6},"id":"10856","type":"Range1d"},{"attributes":{},"id":"10865","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"a0jcY+mbY0CYFvVJbnJjQET9iSWAXmNApbJyeX05Y0AOLbKdbxJjQIeOeA1VvmNAewlfqTheZEDu68A5I+ZjQI5V7xWCuWNA+J+hJEmkY0CuUjAZvXxjQNRSL64nU2NAsGE8OTkLZEBvBzQiorZkQHGPpQ9dMGRAaUQf4pUAZECsQrkjEupjQJyiI7n8v2NAtMh2vt+TY0DZNABlHVhkQGIFCZsLD2VA9DKK5ZZ6ZEBEM0+uqUdkQGDl0CLbL2RAi/IWWTwDZECVPr7Ol9RjQOe3+ZABpWRAVgPeE3VnZUB31m670MRkQDpySXq9jmRAFIjoIaR1ZECUktT4e0ZkQFpkO99PFWRAEIu9vOXxZEBKAbOM3r9lQPt5U5EKD2VAFWF5RtHVZEDIKgAhbbtkQILix5i7iWRAOtqC7wdWZEAfDrfoyT5lQD3/hwVIGGZAfh04Z0RZZUDwT6kS5RxlQHzNFyA2AWVAcTK7OPvMZEAAAAAAwJZkQEjhehSui2VAMf1cfrFwZkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10887"},"selection_policy":{"id":"10888"}},"id":"10851","type":"ColumnDataSource"},{"attributes":{"end":6},"id":"10858","type":"Range1d"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10882"},"major_label_policy":{"id":"10883"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10865"}},"id":"10864","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10885"},"major_label_policy":{"id":"10886"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10869"}},"id":"10868","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10852","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"10864"},"ticker":null,"visible":false},"id":"10867","type":"Grid"},{"attributes":{},"id":"10862","type":"LinearScale"},{"attributes":{},"id":"10882","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"10868"},"dimension":1,"ticker":null,"visible":false},"id":"10871","type":"Grid"},{"attributes":{},"id":"10869","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10852"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10877","type":"Rect"},{"attributes":{},"id":"10883","type":"AllLabels"},{"attributes":{},"id":"10887","type":"Selection"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10872","type":"HoverTool"},{"attributes":{"source":{"id":"10851"}},"id":"10879","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"10872"}]},"id":"10873","type":"Toolbar"},{"attributes":{},"id":"10888","type":"UnionRenderers"},{"attributes":{},"id":"10885","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10851"},"glyph":{"id":"10876"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10877"},"view":{"id":"10879"}},"id":"10878","type":"GlyphRenderer"}],"root_ids":["10853"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"495f3175-bd52-49b0-97ad-99f8cee055cc","root_ids":["10853"],"roots":{"10853":"8969cdd6-160d-4d26-9e89-18a9336aabd7"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"b61d9844-bf51-48cb-88fe-706ca3a3e9a6":{"defs":[],"roots":{"references":[{"attributes":{},"id":"10924","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"10910"}]},"id":"10911","type":"Toolbar"},{"attributes":{"axis":{"id":"10902"},"ticker":null,"visible":false},"id":"10905","type":"Grid"},{"attributes":{"below":[{"id":"10902"}],"center":[{"id":"10905"},{"id":"10909"}],"height":400,"left":[{"id":"10906"}],"renderers":[{"id":"10916"}],"title":{"id":"10892"},"toolbar":{"id":"10911"},"toolbar_location":null,"width":400,"x_range":{"id":"10894"},"x_scale":{"id":"10898"},"y_range":{"id":"10896"},"y_scale":{"id":"10900"}},"id":"10891","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10910","type":"HoverTool"},{"attributes":{"end":6},"id":"10896","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10890","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10920"},"major_label_policy":{"id":"10921"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10903"}},"id":"10902","type":"LinearAxis"},{"attributes":{},"id":"10900","type":"LinearScale"},{"attributes":{},"id":"10898","type":"LinearScale"},{"attributes":{"text":"Toledo \\u2192 Detroit"},"id":"10892","type":"Title"},{"attributes":{},"id":"10920","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10890"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10914","type":"Rect"},{"attributes":{"data":{"val":{"__ndarray__":"2c73U+NLV0DIDZ6NxRJXQMUgsHJoAVlAufyH9NuvWkDLoUW2cw9cQOODQxS4CF1A6Qnwgi14XkBcj8L1KMNXQFFyXs6yhVdAtqyxOqiXWUDukt1xr2VbQEE/+PVo3lxAbQlUWlrqXUAw62qX23NfQN9PjZduOlhA29YeD6D4V0Dd2EcC6C1aQO2Inu+CG1xA7nw/NV6tXUD2jmSg/MteQDzm8tXEN2BAYhBYObSxWEBkO99PjWtYQM5kSconxFpAIR/0bFbRXEBkGvJ0U3xeQH8UdeaerV9A4FYw4Ju1YEDl0CLb+ShZQO6fn5B63lhA9ZDfkWdaW0BWtUnqKYddQBBYObRIS19ABM1ClqBHYECEx23qcjNhQGiR7Xw/oFlAWhE10WdRWUDmHOFZp/BbQFWrCmj9PF5AxPr1+R4NYECuv4C5cbhgQCg4q/RJsWFA7FG4HoUXWkA6rBUSVcRZQA1JdyHnhlxAiUFg5dDyXkCamZmZmXRgQHMCidxCKWFAy6jo/iAvYkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10925"},"selection_policy":{"id":"10926"}},"id":"10889","type":"ColumnDataSource"},{"attributes":{},"id":"10921","type":"AllLabels"},{"attributes":{},"id":"10925","type":"Selection"},{"attributes":{},"id":"10907","type":"BasicTicker"},{"attributes":{"source":{"id":"10889"}},"id":"10917","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10890"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10915","type":"Rect"},{"attributes":{},"id":"10926","type":"UnionRenderers"},{"attributes":{"end":6},"id":"10894","type":"Range1d"},{"attributes":{},"id":"10923","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10923"},"major_label_policy":{"id":"10924"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10907"}},"id":"10906","type":"LinearAxis"},{"attributes":{},"id":"10903","type":"BasicTicker"},{"attributes":{"data_source":{"id":"10889"},"glyph":{"id":"10914"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10915"},"view":{"id":"10917"}},"id":"10916","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"10906"},"dimension":1,"ticker":null,"visible":false},"id":"10909","type":"Grid"}],"root_ids":["10891"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"b61d9844-bf51-48cb-88fe-706ca3a3e9a6","root_ids":["10891"],"roots":{"10891":"9ba6f79f-9b3a-400f-87e3-14c5246179cc"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"c2645a9f-cd52-4b24-951b-1f66f49546f4":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"10944"},"dimension":1,"ticker":null,"visible":false},"id":"10947","type":"Grid"},{"attributes":{},"id":"10945","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"T3ulhzz4iUAoDwu1JhuKQLM3QlBP+olAszdCUE/6iUA3iUFgpRqKQMi8RKup9YlAGvYgqTofikDxyj9ERECKQGDl0CIbZYpAZmZmZmZCikBmZmZmZkKKQEjhehSOZIpAMxgjElU9ikDsHST6e2mKQIyG5wBMiIpAmbuWkA+vikAalYp8fYqKQBqVinx9iopAWDm0yHauikCecwF5AIWKQLixNEu9s4pAKEKPvVPQikDRkVz+A/mKQMcvvJKU0opAxy+8kpTSikBoke18X/iKQAjP39+rzIpAi9k3nP79ikDD/TZ6WxiLQApoImz4QotAel7gqKsai0B6XuCoqxqLQHnpJjFIQotAcyq+RlcUi0BXbUjtP0iLQGVN0TZjYItAQj7o2eyMi0AtjQS/wmKLQC2NBL/CYotAiUFg5TCMi0DdhZytAlyLQCqVSz6BkotAAAl582qoi0B7FK5H4daLQOG7KNXZqotA4bso1dmqi0CamZmZGdaLQEjhehSuo4tA9ihcj8Lci0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"10963"},"selection_policy":{"id":"10964"}},"id":"10927","type":"ColumnDataSource"},{"attributes":{},"id":"10958","type":"BasicTickFormatter"},{"attributes":{"text":"Toledo \\u2192 Duluth"},"id":"10930","type":"Title"},{"attributes":{},"id":"10936","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10928"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10953","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10948","type":"HoverTool"},{"attributes":{"end":6},"id":"10934","type":"Range1d"},{"attributes":{},"id":"10959","type":"AllLabels"},{"attributes":{},"id":"10963","type":"Selection"},{"attributes":{},"id":"10938","type":"LinearScale"},{"attributes":{},"id":"10941","type":"BasicTicker"},{"attributes":{"source":{"id":"10927"}},"id":"10955","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10928"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10952","type":"Rect"},{"attributes":{},"id":"10964","type":"UnionRenderers"},{"attributes":{"below":[{"id":"10940"}],"center":[{"id":"10943"},{"id":"10947"}],"height":400,"left":[{"id":"10944"}],"renderers":[{"id":"10954"}],"title":{"id":"10930"},"toolbar":{"id":"10949"},"toolbar_location":null,"width":400,"x_range":{"id":"10932"},"x_scale":{"id":"10936"},"y_range":{"id":"10934"},"y_scale":{"id":"10938"}},"id":"10929","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"10932","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10928","type":"LinearColorMapper"},{"attributes":{},"id":"10961","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"10927"},"glyph":{"id":"10952"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10953"},"view":{"id":"10955"}},"id":"10954","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10958"},"major_label_policy":{"id":"10959"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10941"}},"id":"10940","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"10948"}]},"id":"10949","type":"Toolbar"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10961"},"major_label_policy":{"id":"10962"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10945"}},"id":"10944","type":"LinearAxis"},{"attributes":{"axis":{"id":"10940"},"ticker":null,"visible":false},"id":"10943","type":"Grid"},{"attributes":{},"id":"10962","type":"AllLabels"}],"root_ids":["10929"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"c2645a9f-cd52-4b24-951b-1f66f49546f4","root_ids":["10929"],"roots":{"10929":"5ac3cf60-d14c-406c-8559-d678ddd3f481"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"581af4d5-bd73-418c-b2c4-41ccb7a9205a":{"defs":[],"roots":{"references":[{"attributes":{"data":{"val":{"__ndarray__":"BOeMKO2HdEAEQ7FwbWZ0QOyVaH9WoHRAaqqCrEKsdEBsTD4satx0QMuhRbYzB3VAmcblLtgbdUD/7+PDZ9V0QBFkTuHSsXRA3fGBePjAdEABEvLm1fx0QN3kAXZ/MHVAppvEIJBedUD3XWy14nR1QO3QVV/iInVAH4XrUTj9dEDS0WAJeg11QIpRfCFpTXVAQFXgv5SEdUCBlUOL7LV1QEjNDTztzXVA6Nms+lxwdUAspojCnUh1QLmJWpr7WXVAIbnrW/yddUCjxb4Jqth1QFyPwvVIDXZAmTyvwvcmdkDk4gOW1711QC2fQDMDlHVArmk5K32mdUCr+HWWj+51QBReglO/LHZAN4lBYKVkdkD30zVJAoB2QNHDdTFSC3ZAOsDdo2jfdUCVITO8/vJ1QEJg5dAiP3ZAd85gndSAdkDqlbIMcX52QEhD188M2XZAzczMzMxYdkBI4XoUzip2QIoBEk2AP3ZA2MdUC7aPdkDaPj/n6dR2QIts5/up0nZAmbJ4Vhcyd0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11001"},"selection_policy":{"id":"11002"}},"id":"10965","type":"ColumnDataSource"},{"attributes":{"text":"Toledo \\u2192 Hamilton"},"id":"10968","type":"Title"},{"attributes":{},"id":"10974","type":"LinearScale"},{"attributes":{},"id":"10996","type":"BasicTickFormatter"},{"attributes":{},"id":"10997","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"10986","type":"HoverTool"},{"attributes":{},"id":"10983","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"10986"}]},"id":"10987","type":"Toolbar"},{"attributes":{"end":6},"id":"10972","type":"Range1d"},{"attributes":{},"id":"11000","type":"AllLabels"},{"attributes":{},"id":"10976","type":"LinearScale"},{"attributes":{},"id":"10999","type":"BasicTickFormatter"},{"attributes":{},"id":"10979","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"10966"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10990","type":"Rect"},{"attributes":{"end":6},"id":"10970","type":"Range1d"},{"attributes":{"source":{"id":"10965"}},"id":"10993","type":"CDSView"},{"attributes":{"below":[{"id":"10978"}],"center":[{"id":"10981"},{"id":"10985"}],"height":400,"left":[{"id":"10982"}],"renderers":[{"id":"10992"}],"title":{"id":"10968"},"toolbar":{"id":"10987"},"toolbar_location":null,"width":400,"x_range":{"id":"10970"},"x_scale":{"id":"10974"},"y_range":{"id":"10972"},"y_scale":{"id":"10976"}},"id":"10967","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"10966","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"10996"},"major_label_policy":{"id":"10997"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10979"}},"id":"10978","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"10999"},"major_label_policy":{"id":"11000"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"10983"}},"id":"10982","type":"LinearAxis"},{"attributes":{"axis":{"id":"10978"},"ticker":null,"visible":false},"id":"10981","type":"Grid"},{"attributes":{},"id":"11001","type":"Selection"},{"attributes":{"axis":{"id":"10982"},"dimension":1,"ticker":null,"visible":false},"id":"10985","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"10966"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"10991","type":"Rect"},{"attributes":{"data_source":{"id":"10965"},"glyph":{"id":"10990"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10991"},"view":{"id":"10993"}},"id":"10992","type":"GlyphRenderer"},{"attributes":{},"id":"11002","type":"UnionRenderers"}],"root_ids":["10967"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"581af4d5-bd73-418c-b2c4-41ccb7a9205a","root_ids":["10967"],"roots":{"10967":"3f9c1195-be3f-4ca5-9b08-78b63733f402"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"7926973c-f1cf-49f2-9ad4-41000ec8fb19":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11037"},"major_label_policy":{"id":"11038"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11021"}},"id":"11020","type":"LinearAxis"},{"attributes":{"axis":{"id":"11016"},"ticker":null,"visible":false},"id":"11019","type":"Grid"},{"attributes":{},"id":"11034","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11020"},"dimension":1,"ticker":null,"visible":false},"id":"11023","type":"Grid"},{"attributes":{},"id":"11021","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11004"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11029","type":"Rect"},{"attributes":{},"id":"11035","type":"AllLabels"},{"attributes":{"text":"Toledo \\u2192 Milwaukee"},"id":"11006","type":"Title"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11004"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11028","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11024","type":"HoverTool"},{"attributes":{},"id":"11012","type":"LinearScale"},{"attributes":{"source":{"id":"11003"}},"id":"11031","type":"CDSView"},{"attributes":{"below":[{"id":"11016"}],"center":[{"id":"11019"},{"id":"11023"}],"height":400,"left":[{"id":"11020"}],"renderers":[{"id":"11030"}],"title":{"id":"11006"},"toolbar":{"id":"11025"},"toolbar_location":null,"width":400,"x_range":{"id":"11008"},"x_scale":{"id":"11012"},"y_range":{"id":"11010"},"y_scale":{"id":"11014"}},"id":"11005","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"11024"}]},"id":"11025","type":"Toolbar"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11004","type":"LinearColorMapper"},{"attributes":{"end":6},"id":"11010","type":"Range1d"},{"attributes":{},"id":"11039","type":"Selection"},{"attributes":{},"id":"11014","type":"LinearScale"},{"attributes":{},"id":"11017","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11003"},"glyph":{"id":"11028"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11029"},"view":{"id":"11031"}},"id":"11030","type":"GlyphRenderer"},{"attributes":{},"id":"11038","type":"AllLabels"},{"attributes":{},"id":"11040","type":"UnionRenderers"},{"attributes":{"end":6},"id":"11008","type":"Range1d"},{"attributes":{},"id":"11037","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11034"},"major_label_policy":{"id":"11035"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11017"}},"id":"11016","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"MHoT6HhFekDVRtDzojx6QIYKxKENIHpAY5Fwa9wlekDfT42Xbh96QI0lUdQeP3pAMzMzM1N2ekCaF3FLdZ16QIGVQ4usk3pAt3mI6/10ekA9+4D2eXt6QKWCL/GsdHpAizrOyJuXekBPejqyDdJ6QBLds65x9XpALeS2IrbqekByVTQx+Ml6QLsUsk6QwXpAarXRSuvJekBzLsVVZe96QHnpJjHILXtAfHoREm5Ne0DnWg+6v0F7QIgi7vsBH3tAPovv1ZgFe0AiwI6kKR97QFsivOIuR3tAlTAusIKJe0DmF291aqV7QJOpglHJmHtAnu+nxgt0e0BlNzP6MVl7QOfyMP5ndHtAUD6Yb/iee0C+nxovPeV7QFC1zNhm/XtAP/j16NLve0CzvGGRFcl7QIzjdh7LrHtArCXTV6bJe0A4Mo/8wfZ7QNvmIa73QHxAulIqPGNVfED5bk6A3EZ8QMmJG1wfHnxAwbefQmQAfEByWHWx5B58QB8mhomLTnxABFYOLbKcfEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11039"},"selection_policy":{"id":"11040"}},"id":"11003","type":"ColumnDataSource"}],"root_ids":["11005"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"7926973c-f1cf-49f2-9ad4-41000ec8fb19","root_ids":["11005"],"roots":{"11005":"a57eafc8-d9dd-4ac4-a3b3-35dfa6748e6d"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"99fcc5c1-2ddd-4165-a000-0b4603275bef":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11072","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11058"},"dimension":1,"ticker":null,"visible":false},"id":"11061","type":"Grid"},{"attributes":{},"id":"11059","type":"BasicTicker"},{"attributes":{},"id":"11073","type":"AllLabels"},{"attributes":{"text":"Toledo \\u2192 Montreal"},"id":"11044","type":"Title"},{"attributes":{"data":{"val":{"__ndarray__":"dWvjmQGCh0CJ21fUxoKHQFFhEWiVi4dA7lRlhIyLh0DMYmLzIZaHQO/ZhMWClYdAWZ6svWR/h0CzeFZ3Yc2HQEhHgyU4zodAmdamsU3Xh0D6tfXTX9eHQJdDQd/M4odAypk3mCfih0BxFGqXkMqHQPCFyVTBGIhACdv0DFYZiEAhQyLI/CKIQAYXhiMzI4hAXJAty3cviECmWepqzC6IQImKJ3G8FYhARnXf1kJtiEDD2nP0c2SIQC6cWmzpZIhAC+QjcwZviEAocQy3InyIQIEZnT1xe4hAoADlSuhgiEDkWM0p566IQIuv0c15r4hAWzCnugawiEAXRbTC2bqIQOy9+KLNyIhAXNlPEBbIiEC/CpUkFKyIQKxsxDjk+YhAemNSjWj6iECIxPMIJPuIQCKmRBKtBolAuJ7XjngViUA3mQLjuhSJQNaAUv4/94hAexSuR+FEiUCaC1weW0WJQK/ETVdBRolALgfVYYBSiUCDf7Z6I2KJQBNZtbVfYYlA7vYP2GtCiUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11077"},"selection_policy":{"id":"11078"}},"id":"11041","type":"ColumnDataSource"},{"attributes":{},"id":"11050","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11062","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"11062"}]},"id":"11063","type":"Toolbar"},{"attributes":{"source":{"id":"11041"}},"id":"11069","type":"CDSView"},{"attributes":{"end":6},"id":"11048","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11042"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11067","type":"Rect"},{"attributes":{},"id":"11052","type":"LinearScale"},{"attributes":{},"id":"11077","type":"Selection"},{"attributes":{},"id":"11055","type":"BasicTicker"},{"attributes":{},"id":"11075","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"11041"},"glyph":{"id":"11066"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11067"},"view":{"id":"11069"}},"id":"11068","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11042"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11066","type":"Rect"},{"attributes":{"end":6},"id":"11046","type":"Range1d"},{"attributes":{},"id":"11078","type":"UnionRenderers"},{"attributes":{"below":[{"id":"11054"}],"center":[{"id":"11057"},{"id":"11061"}],"height":400,"left":[{"id":"11058"}],"renderers":[{"id":"11068"}],"title":{"id":"11044"},"toolbar":{"id":"11063"},"toolbar_location":null,"width":400,"x_range":{"id":"11046"},"x_scale":{"id":"11050"},"y_range":{"id":"11048"},"y_scale":{"id":"11052"}},"id":"11043","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11076","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11042","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11072"},"major_label_policy":{"id":"11073"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11055"}},"id":"11054","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11075"},"major_label_policy":{"id":"11076"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11059"}},"id":"11058","type":"LinearAxis"},{"attributes":{"axis":{"id":"11054"},"ticker":null,"visible":false},"id":"11057","type":"Grid"}],"root_ids":["11043"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"99fcc5c1-2ddd-4165-a000-0b4603275bef","root_ids":["11043"],"roots":{"11043":"c2e29ca1-0c14-4b35-8967-d1f5dca96655"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"463fe0a1-d3af-4499-bc68-d123789ab228":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"11096"},"dimension":1,"ticker":null,"visible":false},"id":"11099","type":"Grid"},{"attributes":{},"id":"11097","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11080"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11105","type":"Rect"},{"attributes":{},"id":"11111","type":"AllLabels"},{"attributes":{"text":"Toledo \\u2192 Thunder Bay"},"id":"11082","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11100","type":"HoverTool"},{"attributes":{},"id":"11088","type":"LinearScale"},{"attributes":{"source":{"id":"11079"}},"id":"11107","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11100"}]},"id":"11101","type":"Toolbar"},{"attributes":{"end":6},"id":"11086","type":"Range1d"},{"attributes":{},"id":"11090","type":"LinearScale"},{"attributes":{},"id":"11093","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11079"},"glyph":{"id":"11104"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11105"},"view":{"id":"11107"}},"id":"11106","type":"GlyphRenderer"},{"attributes":{},"id":"11113","type":"BasicTickFormatter"},{"attributes":{},"id":"11116","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11080"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11104","type":"Rect"},{"attributes":{},"id":"11115","type":"Selection"},{"attributes":{"below":[{"id":"11092"}],"center":[{"id":"11095"},{"id":"11099"}],"height":400,"left":[{"id":"11096"}],"renderers":[{"id":"11106"}],"title":{"id":"11082"},"toolbar":{"id":"11101"},"toolbar_location":null,"width":400,"x_range":{"id":"11084"},"x_scale":{"id":"11088"},"y_range":{"id":"11086"},"y_scale":{"id":"11090"}},"id":"11081","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"11084","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11080","type":"LinearColorMapper"},{"attributes":{},"id":"11114","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11110"},"major_label_policy":{"id":"11111"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11093"}},"id":"11092","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11113"},"major_label_policy":{"id":"11114"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11097"}},"id":"11096","type":"LinearAxis"},{"attributes":{"axis":{"id":"11092"},"ticker":null,"visible":false},"id":"11095","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"Towbbfs1jkD+1HjpBjWOQC/M+K3MJI5AqM/EKvQkjkAKtyFr8iSOQGiR7Xx/PI5AxRG1fmRjjkDJdr6fWo2OQP21BgCYjI5AAwtgyjB7jkD7oeO0gXuOQK6f/rO2kY5A/tR46WaUjkDTUtT0lL2OQERhYdK55I5AAiuHFinkjkDPtdTmlNGOQE90Aj8P0o5A+gbLfYfpjkA6kst/SOyOQOgn5mrFF49AuLcRBRk8j0ABDBUtujuPQKP0OwP5J49Am7IuyZwoj0BaKm9HWEGPQNc07zglRI9A/Pz34PVxj0A0orQ3eJOPQAaBlUNLk49AVU/mH11+j0DayHVTKn+PQH4ZjBEpmY9Ac9cS8gGcj0D9FTJXJsyPQMNIL2rX6o9A9zk+Wtzqj0A8SiU8wdSPQDQvh9231Y9A5dAi2/nwj0AQejar3vOPQH8XtmYrE5BAiBOYThshkEB0eXO4NiGQQJIiMqySFZBAx0rMsyIWkEAmxFxSZSSQQFYOLbLdJZBA/yPToUNAkEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11115"},"selection_policy":{"id":"11116"}},"id":"11079","type":"ColumnDataSource"},{"attributes":{},"id":"11110","type":"BasicTickFormatter"}],"root_ids":["11081"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"463fe0a1-d3af-4499-bc68-d123789ab228","root_ids":["11081"],"roots":{"11081":"66e21044-9db8-4ef8-ad22-9815a6e2e037"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"bcd4be4d-3da0-4410-bf09-7faa837163fd":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11149","type":"AllLabels"},{"attributes":{},"id":"11153","type":"Selection"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11138","type":"HoverTool"},{"attributes":{"source":{"id":"11117"}},"id":"11145","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11138"}]},"id":"11139","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11118"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11143","type":"Rect"},{"attributes":{"text":"Toledo \\u2192 Toronto"},"id":"11120","type":"Title"},{"attributes":{},"id":"11154","type":"UnionRenderers"},{"attributes":{},"id":"11151","type":"BasicTickFormatter"},{"attributes":{},"id":"11126","type":"LinearScale"},{"attributes":{"data_source":{"id":"11117"},"glyph":{"id":"11142"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11143"},"view":{"id":"11145"}},"id":"11144","type":"GlyphRenderer"},{"attributes":{"end":6},"id":"11124","type":"Range1d"},{"attributes":{"below":[{"id":"11130"}],"center":[{"id":"11133"},{"id":"11137"}],"height":400,"left":[{"id":"11134"}],"renderers":[{"id":"11144"}],"title":{"id":"11120"},"toolbar":{"id":"11139"},"toolbar_location":null,"width":400,"x_range":{"id":"11122"},"x_scale":{"id":"11126"},"y_range":{"id":"11124"},"y_scale":{"id":"11128"}},"id":"11119","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11128","type":"LinearScale"},{"attributes":{},"id":"11131","type":"BasicTicker"},{"attributes":{},"id":"11152","type":"AllLabels"},{"attributes":{"end":6},"id":"11122","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11118","type":"LinearColorMapper"},{"attributes":{"data":{"val":{"__ndarray__":"ZIFlWxxgeUBeTflrbUh5QKJ3zyYMbXlAHVpkO7+NeUDywSEKXLB5QE90Aj8PiXlAqObNPNRZeUARUIZPX8F5QBtVPOTcqHlA4oow6t/QeUB0gLtHEfR5QLeRV4y/GHpApHA9CtfueUBoYar0zrx5QLD2wUOiInpA11x/XEwJekBcIEHxYzR6QNnO91NjWnpAfWGNDiOBekD5bHjVnlR6QCjchqzJH3pAF1V1RZ9LekChjKfUu2l6QC3ktiK2l3pAMfVOYLXAekBDMcOQhul6QE5ps6BmunpA2i5+ZMSCekCbUC3HkKl6QF6U6kwrynpADNARVAj7ekCWQ4tsByd7QPvYExPqUXtAsY3Tay4ge0CaqVocv+V6QC10ykiCB3tAGpwtxZoqe0Dek4eFWl57QO1p4nhZjXtAwKhJlU26e0AGig439oV7QFkkN9S5SHtAv5dnynNle0DXo3A9Cot7QK9X/baswXtAUrgehavze0CGeH8XsSJ8QFyGSQK+63tAGZ8TjLSre0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11153"},"selection_policy":{"id":"11154"}},"id":"11117","type":"ColumnDataSource"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11148"},"major_label_policy":{"id":"11149"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11131"}},"id":"11130","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11151"},"major_label_policy":{"id":"11152"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11135"}},"id":"11134","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11118"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11142","type":"Rect"},{"attributes":{"axis":{"id":"11130"},"ticker":null,"visible":false},"id":"11133","type":"Grid"},{"attributes":{},"id":"11148","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11134"},"dimension":1,"ticker":null,"visible":false},"id":"11137","type":"Grid"},{"attributes":{},"id":"11135","type":"BasicTicker"}],"root_ids":["11119"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"bcd4be4d-3da0-4410-bf09-7faa837163fd","root_ids":["11119"],"roots":{"11119":"4c12b7ce-e5ab-49fb-990b-3171b323d61b"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"4fc0e3c6-0e6c-4e88-98fd-49ca277f9771":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"11172"},"dimension":1,"ticker":null,"visible":false},"id":"11175","type":"Grid"},{"attributes":{},"id":"11173","type":"BasicTicker"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11176","type":"HoverTool"},{"attributes":{"end":6},"id":"11162","type":"Range1d"},{"attributes":{"source":{"id":"11155"}},"id":"11183","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11176"}]},"id":"11177","type":"Toolbar"},{"attributes":{},"id":"11166","type":"LinearScale"},{"attributes":{},"id":"11192","type":"UnionRenderers"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11156","type":"LinearColorMapper"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11189"},"major_label_policy":{"id":"11190"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11173"}},"id":"11172","type":"LinearAxis"},{"attributes":{"text":"Toledo \\u2192 Windsor"},"id":"11158","type":"Title"},{"attributes":{"data_source":{"id":"11155"},"glyph":{"id":"11180"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11181"},"view":{"id":"11183"}},"id":"11182","type":"GlyphRenderer"},{"attributes":{},"id":"11169","type":"BasicTicker"},{"attributes":{},"id":"11189","type":"BasicTickFormatter"},{"attributes":{},"id":"11164","type":"LinearScale"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11186"},"major_label_policy":{"id":"11187"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11169"}},"id":"11168","type":"LinearAxis"},{"attributes":{"axis":{"id":"11168"},"ticker":null,"visible":false},"id":"11171","type":"Grid"},{"attributes":{},"id":"11190","type":"AllLabels"},{"attributes":{"end":6},"id":"11160","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11156"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11180","type":"Rect"},{"attributes":{"below":[{"id":"11168"}],"center":[{"id":"11171"},{"id":"11175"}],"height":400,"left":[{"id":"11172"}],"renderers":[{"id":"11182"}],"title":{"id":"11158"},"toolbar":{"id":"11177"},"toolbar_location":null,"width":400,"x_range":{"id":"11160"},"x_scale":{"id":"11164"},"y_range":{"id":"11162"},"y_scale":{"id":"11166"}},"id":"11157","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11186","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"nMQgsPLQWEAjAA93e4ZYQJKUkQb5hVhAaBVHL/RSWEBGz2+Qd+ZYQDLohNDB61lAuDTIbrBtW0C4HoXr0VBZQHCq/70lAVlA2iihqngAWUDBaajuHcpYQLUq03meZ1lAIIGatW9/WkANiLWd2xxcQNV46Sax0FlAubGPBNB7WUDm1lpO+HpZQOF6FK5HQVlAs/9LY8XoWUBEukSaHRNbQJd7N8wGzFxA8tJNYpBQWkDNGItLevZZQPKEFPJ39VlAkAWWbXG4WUCx1MRM7GlaQDNTWn/LpltAIm+5+jF7XUAOLbKdb9BaQBcgG5IkcVpAyZI5lvdvWkA/kBctmy9aQK+pPTYT61pAV4wEZHk6XEB3wqYpXSpeQCuHFtlOUFtAK4cW2c7rWkDVQPM5d+paQCS7LezEplpArX62HzpsW0B7xa5IJ85cQAK2KFiI2V5ASOF6FC7QW0A/7hEgeWZbQKtOGN72ZFtA00Wvq+4dW0CrUy8JYe1bQGlexC3VYV1AjKmqhrOIX0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11191"},"selection_policy":{"id":"11192"}},"id":"11155","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11156"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11181","type":"Rect"},{"attributes":{},"id":"11187","type":"AllLabels"},{"attributes":{},"id":"11191","type":"Selection"}],"root_ids":["11157"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"4fc0e3c6-0e6c-4e88-98fd-49ca277f9771","root_ids":["11157"],"roots":{"11157":"bb75f79d-8ccd-4ce8-90e7-7c8ac6314cd0"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"4c6835e5-5b42-4d7b-8ede-2f12149e5087":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11202","type":"LinearScale"},{"attributes":{},"id":"11227","type":"BasicTickFormatter"},{"attributes":{"end":6},"id":"11198","type":"Range1d"},{"attributes":{"axis":{"id":"11206"},"ticker":null,"visible":false},"id":"11209","type":"Grid"},{"attributes":{"axis":{"id":"11210"},"dimension":1,"ticker":null,"visible":false},"id":"11213","type":"Grid"},{"attributes":{},"id":"11228","type":"AllLabels"},{"attributes":{},"id":"11211","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"11214"}]},"id":"11215","type":"Toolbar"},{"attributes":{},"id":"11207","type":"BasicTicker"},{"attributes":{},"id":"11224","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11227"},"major_label_policy":{"id":"11228"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11211"}},"id":"11210","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"JM3EGfi9hEA9CtejcL6EQIKdUak4uIRALWwX5BjHhEAIAfkS2r6EQL9JLlpL0oRAlKhyNb20hECChw4meg6FQLiVXpsdAIVAexSuR2H5hEC7A4b2GwmFQJtU2Rw8AIVAsBI9Ou8UhUAC2rFs0fWEQJbWOsxSUYVAMiHmkspBhUCwalpzoUmFQEib9AgfS4VANDysJp5BhUCaR1kak1eFQHef46PlNoVAqSVnciuUhUCKWppbwZOFQNnO91Ozi4VA1TJjGyKNhUDGj4wwAIOFQIsQaPo2moVA5dAi2/l3hUC8dJMYBNeFQFWx5yFZ1oVAAzOVNMXNhUBjytEtJc+FQFjjbDpixIVAdEWE2trchUBUAmISDrmFQOQEt/9CLYZAIAg16PAYhkAzKyUV1w+GQPBhQEAoEYZA8co/RMQFhkBlDpO6fh+GQMnHk0ki+oVA4P2n0RpxhkDi5CPOj1uGQFyPwvXoUYZAffmuUitThkCDHiBOJkeGQE9Dr5oiYoZAN/nSgDY7hkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11229"},"selection_policy":{"id":"11230"}},"id":"11193","type":"ColumnDataSource"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11194","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11224"},"major_label_policy":{"id":"11225"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11207"}},"id":"11206","type":"LinearAxis"},{"attributes":{},"id":"11204","type":"LinearScale"},{"attributes":{"data_source":{"id":"11193"},"glyph":{"id":"11218"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11219"},"view":{"id":"11221"}},"id":"11220","type":"GlyphRenderer"},{"attributes":{"text":"Toronto \\u2192 Chicago"},"id":"11196","type":"Title"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11194"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11218","type":"Rect"},{"attributes":{},"id":"11225","type":"AllLabels"},{"attributes":{"below":[{"id":"11206"}],"center":[{"id":"11209"},{"id":"11213"}],"height":400,"left":[{"id":"11210"}],"renderers":[{"id":"11220"}],"title":{"id":"11196"},"toolbar":{"id":"11215"},"toolbar_location":null,"width":400,"x_range":{"id":"11198"},"x_scale":{"id":"11202"},"y_range":{"id":"11200"},"y_scale":{"id":"11204"}},"id":"11195","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11214","type":"HoverTool"},{"attributes":{},"id":"11229","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11194"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11219","type":"Rect"},{"attributes":{"end":6},"id":"11200","type":"Range1d"},{"attributes":{"source":{"id":"11193"}},"id":"11221","type":"CDSView"},{"attributes":{},"id":"11230","type":"UnionRenderers"}],"root_ids":["11195"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"4c6835e5-5b42-4d7b-8ede-2f12149e5087","root_ids":["11195"],"roots":{"11195":"3b3ba224-3b97-4e62-8f45-1863934a7c48"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"05441eb5-4911-4362-b62d-7e22ddaac9ff":{"defs":[],"roots":{"references":[{"attributes":{"below":[{"id":"11244"}],"center":[{"id":"11247"},{"id":"11251"}],"height":400,"left":[{"id":"11248"}],"renderers":[{"id":"11258"}],"title":{"id":"11234"},"toolbar":{"id":"11253"},"toolbar_location":null,"width":400,"x_range":{"id":"11236"},"x_scale":{"id":"11240"},"y_range":{"id":"11238"},"y_scale":{"id":"11242"}},"id":"11233","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"11231"},"glyph":{"id":"11256"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11257"},"view":{"id":"11259"}},"id":"11258","type":"GlyphRenderer"},{"attributes":{},"id":"11265","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11262"},"major_label_policy":{"id":"11263"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11245"}},"id":"11244","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11232","type":"LinearColorMapper"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11265"},"major_label_policy":{"id":"11266"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11249"}},"id":"11248","type":"LinearAxis"},{"attributes":{"axis":{"id":"11244"},"ticker":null,"visible":false},"id":"11247","type":"Grid"},{"attributes":{},"id":"11266","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"11252"}]},"id":"11253","type":"Toolbar"},{"attributes":{"axis":{"id":"11248"},"dimension":1,"ticker":null,"visible":false},"id":"11251","type":"Grid"},{"attributes":{},"id":"11249","type":"BasicTicker"},{"attributes":{},"id":"11262","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"+fE8XeKJeUDtc8ZB82J5QC6QoPgxG3lA3lW03hRAeUDsB4a9uh55QHZUkPrmQHlAHhuBeF0/eUDv+EA8PPB5QCg4q/TJxnlAjZduEoN6eUDNzMzMzKF5QKj+QSRjfnlAuB6F61GjeUB1ApoIG6J5QOT/RBuWVnpAbyR1p6AqekDtnjws1Nl5QLxD5bqEA3pAVs0YiwveeUD66HncvAV6QM3pspjYBHpA5y4u+u+8ekCq6Flad456QEymCkYlOXpAueLiqDxlekASxNTxsz16QDyzbs0naHpAJNHLKJZnekDdNTLZSSN7QOSsPg1O8npArK3YX3aYekCoWfuW9MZ6QMCSq1hcnXpAfn1jvpLKekB8uOS4U8p6QNM8NrijiXtALJkIwCRWe0ALtaZ5x/d6QKX4+ISsKHtAfIlnvwT9ekDAR1iv/Sx7QNOf/UgRLXtAyUM6l/3ve0BmXe1y+7l7QGq8dJMYV3tAlG8Rc2SKe0A4gCMmrVx7QAISTaBoj3tAK4cW2c6Pe0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11267"},"selection_policy":{"id":"11268"}},"id":"11231","type":"ColumnDataSource"},{"attributes":{"text":"Toronto \\u2192 Cleveland"},"id":"11234","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11252","type":"HoverTool"},{"attributes":{},"id":"11240","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11232"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11257","type":"Rect"},{"attributes":{"end":6},"id":"11238","type":"Range1d"},{"attributes":{},"id":"11263","type":"AllLabels"},{"attributes":{},"id":"11267","type":"Selection"},{"attributes":{},"id":"11242","type":"LinearScale"},{"attributes":{},"id":"11245","type":"BasicTicker"},{"attributes":{"source":{"id":"11231"}},"id":"11259","type":"CDSView"},{"attributes":{},"id":"11268","type":"UnionRenderers"},{"attributes":{"end":6},"id":"11236","type":"Range1d"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11232"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11256","type":"Rect"}],"root_ids":["11233"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"05441eb5-4911-4362-b62d-7e22ddaac9ff","root_ids":["11233"],"roots":{"11233":"6f243b51-a0e9-4629-a567-3e915ebf0090"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"fec417ba-d8dc-4f0f-ba10-bebda803a852":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"11282"},"ticker":null,"visible":false},"id":"11285","type":"Grid"},{"attributes":{},"id":"11306","type":"UnionRenderers"},{"attributes":{"axis":{"id":"11286"},"dimension":1,"ticker":null,"visible":false},"id":"11289","type":"Grid"},{"attributes":{},"id":"11287","type":"BasicTicker"},{"attributes":{},"id":"11303","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"/hr/9LVvdUC7Ahshbax1QLmcXJ0t0HVAqBKv/IP3dUCns5PBURl2QLUDCeXYK3ZAyZwdX/EfdkBFFy9x38B1QNBefTwUAnZAtNGU+FcodkDYGZWKHF52QEoMAiuHgXZAO5G7Y2yLdkBW6M3yxn52QF7C/HBrEnZA5rrfV7tXdkCuBs1TgoB2QIOy38k9unZAUb01sFXgdkDPRlPi/+p2QNULmYac3XZAsU8AxQhkdkASUhJtoq52QKk7Ba+s2HZALUsqCV8Wd0BZbmk1JD93QGP86mCTSndAYldJGnI8d0AXBKCbZ7V2QJUS3Q5oBHdApHA9Ctcwd0DY43RIgHJ3QGJKJNHLqHdA6Ymd3yaqd0DhehSuR5t3QA7MwLcfB3dAGNOnsC1ad0CfpXVlAYl3QHVU2oehzndApwUv+goIeEB9PzVeugl4QGGe30Ed+ndA02BkE2pYd0Cbk3JS8693QJnarcAr4XdAH+0kx8IqeEC/Dpwzomp4QBH1zNxNaXhA7emP1fJYeEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11305"},"selection_policy":{"id":"11306"}},"id":"11269","type":"ColumnDataSource"},{"attributes":{},"id":"11300","type":"BasicTickFormatter"},{"attributes":{"text":"Toronto \\u2192 Detroit"},"id":"11272","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11270"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11295","type":"Rect"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11290","type":"HoverTool"},{"attributes":{},"id":"11278","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"11290"}]},"id":"11291","type":"Toolbar"},{"attributes":{},"id":"11304","type":"AllLabels"},{"attributes":{},"id":"11301","type":"AllLabels"},{"attributes":{"end":6},"id":"11276","type":"Range1d"},{"attributes":{"source":{"id":"11269"}},"id":"11297","type":"CDSView"},{"attributes":{},"id":"11280","type":"LinearScale"},{"attributes":{},"id":"11283","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11270"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11294","type":"Rect"},{"attributes":{"end":6},"id":"11274","type":"Range1d"},{"attributes":{},"id":"11305","type":"Selection"},{"attributes":{"below":[{"id":"11282"}],"center":[{"id":"11285"},{"id":"11289"}],"height":400,"left":[{"id":"11286"}],"renderers":[{"id":"11296"}],"title":{"id":"11272"},"toolbar":{"id":"11291"},"toolbar_location":null,"width":400,"x_range":{"id":"11274"},"x_scale":{"id":"11278"},"y_range":{"id":"11276"},"y_scale":{"id":"11280"}},"id":"11271","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11270","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11300"},"major_label_policy":{"id":"11301"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11283"}},"id":"11282","type":"LinearAxis"},{"attributes":{"data_source":{"id":"11269"},"glyph":{"id":"11294"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11295"},"view":{"id":"11297"}},"id":"11296","type":"GlyphRenderer"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11303"},"major_label_policy":{"id":"11304"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11287"}},"id":"11286","type":"LinearAxis"}],"root_ids":["11271"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"fec417ba-d8dc-4f0f-ba10-bebda803a852","root_ids":["11271"],"roots":{"11271":"f2edb1bb-2395-4cf1-a416-fa45147ec526"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"97e1ffa8-f6af-4cbf-ba3f-0706490af11f":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"11320"},"ticker":null,"visible":false},"id":"11323","type":"Grid"},{"attributes":{},"id":"11318","type":"LinearScale"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11341"},"major_label_policy":{"id":"11342"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11325"}},"id":"11324","type":"LinearAxis"},{"attributes":{},"id":"11321","type":"BasicTicker"},{"attributes":{},"id":"11342","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11338"},"major_label_policy":{"id":"11339"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11321"}},"id":"11320","type":"LinearAxis"},{"attributes":{},"id":"11338","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11324"},"dimension":1,"ticker":null,"visible":false},"id":"11327","type":"Grid"},{"attributes":{},"id":"11325","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11308"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11333","type":"Rect"},{"attributes":{},"id":"11339","type":"AllLabels"},{"attributes":{"end":6},"id":"11312","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11328","type":"HoverTool"},{"attributes":{"text":"Toronto \\u2192 Duluth"},"id":"11310","type":"Title"},{"attributes":{"source":{"id":"11307"}},"id":"11335","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11328"}]},"id":"11329","type":"Toolbar"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11308","type":"LinearColorMapper"},{"attributes":{"data":{"val":{"__ndarray__":"BP9byc7EkECYw+479s2QQGyvBb0n05BAZJEm3mHjkEDKUuv9lu+QQLyUumTs+JBAhuelYmMDkUAHX5hM9fGQQBvZlZbR+5BAbm3heUkBkUCDFhIwmhKRQMlXAimhH5FAJvvnaZApkUBU4GQbqDSRQAq/1M8bH5FAnu488awpkUBORwA3ay+RQKKb/YHSQZFAyFwZVKtPkUBwfVhvNFqRQCPZI9TsZZFADB8RU0JMkUAhBORLiFeRQE8F3POMXZFAwCDp0wpxkUDpRe1+tX+RQNrjhXTYipFA8tHijDGXkUAPf03WaHmRQKQZi6ZjhZFAUMO3sK6LkUDfpdQlQ6CRQOhKBKq/r5FAI2b2eXy7kUDByqFFdsiRQBHfiVmPppFAJy8yAT+zkUAwndZt0LmRQP4qwHd7z5FA6E8b1cnfkUCOzCN/IOyRQI/DYP66+ZFAFD/G3LXTkUDbpnhcBOGRQDFbsiry55FAHbCrybP+kUAIOe//0w+SQNdOlITEHJJAXrwft/8qkkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11343"},"selection_policy":{"id":"11344"}},"id":"11307","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"11320"}],"center":[{"id":"11323"},{"id":"11327"}],"height":400,"left":[{"id":"11324"}],"renderers":[{"id":"11334"}],"title":{"id":"11310"},"toolbar":{"id":"11329"},"toolbar_location":null,"width":400,"x_range":{"id":"11312"},"x_scale":{"id":"11316"},"y_range":{"id":"11314"},"y_scale":{"id":"11318"}},"id":"11309","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11343","type":"Selection"},{"attributes":{},"id":"11341","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11308"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11332","type":"Rect"},{"attributes":{"end":6},"id":"11314","type":"Range1d"},{"attributes":{"data_source":{"id":"11307"},"glyph":{"id":"11332"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11333"},"view":{"id":"11335"}},"id":"11334","type":"GlyphRenderer"},{"attributes":{},"id":"11316","type":"LinearScale"},{"attributes":{},"id":"11344","type":"UnionRenderers"}],"root_ids":["11309"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"97e1ffa8-f6af-4cbf-ba3f-0706490af11f","root_ids":["11309"],"roots":{"11309":"b85da118-6c4f-4e61-8623-edec225b2104"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"2a827bef-9dbc-4a1e-a0ec-2393315a1e4b":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11379"},"major_label_policy":{"id":"11380"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11363"}},"id":"11362","type":"LinearAxis"},{"attributes":{"axis":{"id":"11358"},"ticker":null,"visible":false},"id":"11361","type":"Grid"},{"attributes":{},"id":"11376","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"11358"}],"center":[{"id":"11361"},{"id":"11365"}],"height":400,"left":[{"id":"11362"}],"renderers":[{"id":"11372"}],"title":{"id":"11348"},"toolbar":{"id":"11367"},"toolbar_location":null,"width":400,"x_range":{"id":"11350"},"x_scale":{"id":"11354"},"y_range":{"id":"11352"},"y_scale":{"id":"11356"}},"id":"11347","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"11362"},"dimension":1,"ticker":null,"visible":false},"id":"11365","type":"Grid"},{"attributes":{},"id":"11363","type":"BasicTicker"},{"attributes":{},"id":"11377","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11346"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11371","type":"Rect"},{"attributes":{"text":"Toronto \\u2192 Hamilton"},"id":"11348","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11366","type":"HoverTool"},{"attributes":{},"id":"11354","type":"LinearScale"},{"attributes":{"source":{"id":"11345"}},"id":"11373","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11366"}]},"id":"11367","type":"Toolbar"},{"attributes":{"data":{"val":{"__ndarray__":"0zTFb0xhV0AwyVQDBcxXQEsaSLzhVVlA9ehXhCxfWkDkLVc/tohbQEStH1FXYFxAMZkqGJVoXUDwuI958PhXQADzuagQTVhA6Qnwgq32WUANbDqnfhRbQIvEBDX8ZVxAkUPEzSk9XUBWDi2ynVleQBPCWQBJdVhA0RwfThzOWECG+ZdJeZdaQIrC09CryltAKD9OPXc0XUAUev1J/BleQHuDL0ymSl9Ak2uvqoMRWUAiPDXyVE9ZQN9PjZfuN1tAvHSTGASBXED7WSxF8gJeQGEQosbO9l5AUPwYc9cdYECO6zqvDJBZQFcgH5kz0FlARKEKJE3YW0DvJlNgXDddQJjUdU1t0V5A40bbQqHTX0DjNhrAW5ZgQIprxrOVDlpAmNBuPj9RWkCCo4kcR2tcQFZ5p6e07V1ANk+/VeifX0CTMeMS7GhgQHZxGw3gDmFAKdPDK6SxWkDagL7jStJaQEopQ7AFC11AiCtn7wykXkAEtc6uMTdgQHcTfNO012BACKwcWmSHYUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11381"},"selection_policy":{"id":"11382"}},"id":"11345","type":"ColumnDataSource"},{"attributes":{"end":6},"id":"11352","type":"Range1d"},{"attributes":{},"id":"11381","type":"Selection"},{"attributes":{},"id":"11356","type":"LinearScale"},{"attributes":{},"id":"11379","type":"BasicTickFormatter"},{"attributes":{},"id":"11359","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11345"},"glyph":{"id":"11370"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11371"},"view":{"id":"11373"}},"id":"11372","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11346"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11370","type":"Rect"},{"attributes":{},"id":"11382","type":"UnionRenderers"},{"attributes":{},"id":"11380","type":"AllLabels"},{"attributes":{"end":6},"id":"11350","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11346","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11376"},"major_label_policy":{"id":"11377"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11359"}},"id":"11358","type":"LinearAxis"}],"root_ids":["11347"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"2a827bef-9dbc-4a1e-a0ec-2393315a1e4b","root_ids":["11347"],"roots":{"11347":"2cedea28-04f3-4edb-9157-c182be58b45e"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"a0973288-9583-4ad7-aa1b-c1eaa2e81408":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11419","type":"Selection"},{"attributes":{"data":{"val":{"__ndarray__":"jeQ8rSyyh0ASpb3BF8qHQM3MzMyMyYdACNG1iknSh0D7mGrBVtmHQG6t5YSv0IdAG55eKQvIh0DorttWqfmHQCGwcmgRE4hAuB6F67EkiED4wZ4bXy2IQLgehevxIohAoLgt24gZiEDhehSuZxCIQEN5egAmQYhAMLsnDwtciEAUrkfham6IQPjdGRKMd4hAdqSfFY1siEC1BHS6Z2KIQKhXyjLEWIhApdcLqqKIiEA/xty1BKWIQHE9CtcjuIhA8WWiCLnBiEAzKro/KLaIQMH23b6Iq4hAbjSAtyChiEAAoqpTH9CIQFKOE3Cp7YhAzczMzNwBiUDxgR3/5QuJQPCv1GnD/4hA1Hw6w6n0iEA0ETY8femIQHr7GBheF4lAMEymCkY2iUApXI/ClUuJQOoJpvUSVolArTXvk15JiUDmApfHyj2JQPrt68DZMYlASsCeZXxeiUANCjml4n6JQIXrUbhOlYlA6iUh7D+giUBxT/y9+ZKJQPmI88vrholAwcqhRTZ6iUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11419"},"selection_policy":{"id":"11420"}},"id":"11383","type":"ColumnDataSource"},{"attributes":{},"id":"11414","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11400"},"dimension":1,"ticker":null,"visible":false},"id":"11403","type":"Grid"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11417"},"major_label_policy":{"id":"11418"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11401"}},"id":"11400","type":"LinearAxis"},{"attributes":{},"id":"11401","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11384"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11409","type":"Rect"},{"attributes":{},"id":"11415","type":"AllLabels"},{"attributes":{"text":"Toronto \\u2192 Milwaukee"},"id":"11386","type":"Title"},{"attributes":{},"id":"11392","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11404","type":"HoverTool"},{"attributes":{"source":{"id":"11383"}},"id":"11411","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11404"}]},"id":"11405","type":"Toolbar"},{"attributes":{"end":6},"id":"11390","type":"Range1d"},{"attributes":{},"id":"11394","type":"LinearScale"},{"attributes":{},"id":"11397","type":"BasicTicker"},{"attributes":{},"id":"11420","type":"UnionRenderers"},{"attributes":{},"id":"11417","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"11383"},"glyph":{"id":"11408"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11409"},"view":{"id":"11411"}},"id":"11410","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11384"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11408","type":"Rect"},{"attributes":{"end":6},"id":"11388","type":"Range1d"},{"attributes":{"below":[{"id":"11396"}],"center":[{"id":"11399"},{"id":"11403"}],"height":400,"left":[{"id":"11400"}],"renderers":[{"id":"11410"}],"title":{"id":"11386"},"toolbar":{"id":"11405"},"toolbar_location":null,"width":400,"x_range":{"id":"11388"},"x_scale":{"id":"11392"},"y_range":{"id":"11390"},"y_scale":{"id":"11394"}},"id":"11385","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11418","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11384","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11414"},"major_label_policy":{"id":"11415"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11397"}},"id":"11396","type":"LinearAxis"},{"attributes":{"axis":{"id":"11396"},"ticker":null,"visible":false},"id":"11399","type":"Grid"}],"root_ids":["11385"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"a0973288-9583-4ad7-aa1b-c1eaa2e81408","root_ids":["11385"],"roots":{"11385":"ee79b4a1-e7ad-43c0-bf1f-68d7a82b0978"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"75545848-496a-4bfe-a1db-f7751e6d0a31":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"11438"},"dimension":1,"ticker":null,"visible":false},"id":"11441","type":"Grid"},{"attributes":{},"id":"11439","type":"BasicTicker"},{"attributes":{},"id":"11453","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11422"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11447","type":"Rect"},{"attributes":{},"id":"11457","type":"Selection"},{"attributes":{"text":"Toronto \\u2192 Montreal"},"id":"11424","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11442","type":"HoverTool"},{"attributes":{},"id":"11430","type":"LinearScale"},{"attributes":{"source":{"id":"11421"}},"id":"11449","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11442"}]},"id":"11443","type":"Toolbar"},{"attributes":{},"id":"11458","type":"UnionRenderers"},{"attributes":{},"id":"11452","type":"BasicTickFormatter"},{"attributes":{"end":6},"id":"11428","type":"Range1d"},{"attributes":{},"id":"11432","type":"LinearScale"},{"attributes":{},"id":"11455","type":"BasicTickFormatter"},{"attributes":{},"id":"11435","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11421"},"glyph":{"id":"11446"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11447"},"view":{"id":"11449"}},"id":"11448","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11422"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11446","type":"Rect"},{"attributes":{},"id":"11456","type":"AllLabels"},{"attributes":{"below":[{"id":"11434"}],"center":[{"id":"11437"},{"id":"11441"}],"height":400,"left":[{"id":"11438"}],"renderers":[{"id":"11448"}],"title":{"id":"11424"},"toolbar":{"id":"11443"},"toolbar_location":null,"width":400,"x_range":{"id":"11426"},"x_scale":{"id":"11430"},"y_range":{"id":"11428"},"y_scale":{"id":"11432"}},"id":"11423","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"11426","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11422","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11452"},"major_label_policy":{"id":"11453"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11435"}},"id":"11434","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11455"},"major_label_policy":{"id":"11456"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11439"}},"id":"11438","type":"LinearAxis"},{"attributes":{"axis":{"id":"11434"},"ticker":null,"visible":false},"id":"11437","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"J4QOuuTzfEDYvAVtDd18QKWLqOS30HxAJ2vUQzTQfED4XFyZBs18QFZVHpObs3xAdq6D3paufEBWAnM+Blh9QLpCabn9P31A0SrpF9szfUDkg57NqjN9QHdx0X8FF31AJ8S3C6gVfUABG2vaQBB9QPyFw3eH0H1AjqDnBe6ifUAqbKv+zX59QGKE8Gjjln1Ah2OnaaF4fUAGWzaEtHd9QIyHUtbqcX1AfYaB+Oo1fkBi/mVS3gV+QFtsSf1r4H1AtI6qJgj6fUCWVX1TPdp9QNfJz/zA2X1AGPQ50pTTfUAMryR5Tpt+QEOEyZ7OaH5Ai2zn+wlCfkAHmWTkLF1+QKZHUz3ZO35AezoNB3g7fkCjYCHOPjV+QI2v4vmxAH9AF+JH677LfkC8bIX6p6N+QFmjHqJRwH5AqBFEJ3WdfkBWe31SEp1+QC7NCMroln5ADrCgehVmf0DrP8Y3ry5/QO1sI/lFBX9ArK3YX3Yjf0ABG2vaQN9+QCOUCJ6s/n5AuTnwxZL4fkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11457"},"selection_policy":{"id":"11458"}},"id":"11421","type":"ColumnDataSource"}],"root_ids":["11423"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"75545848-496a-4bfe-a1db-f7751e6d0a31","root_ids":["11423"],"roots":{"11423":"a9a65c5f-0c5f-47f4-b7a4-29b919316ac7"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"a7052a60-2486-46de-9c65-4cb898faafaa":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11491","type":"AllLabels"},{"attributes":{},"id":"11495","type":"Selection"},{"attributes":{"axis":{"id":"11476"},"dimension":1,"ticker":null,"visible":false},"id":"11479","type":"Grid"},{"attributes":{"source":{"id":"11459"}},"id":"11487","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11460"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11485","type":"Rect"},{"attributes":{},"id":"11496","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11460"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11484","type":"Rect"},{"attributes":{},"id":"11468","type":"LinearScale"},{"attributes":{"below":[{"id":"11472"}],"center":[{"id":"11475"},{"id":"11479"}],"height":400,"left":[{"id":"11476"}],"renderers":[{"id":"11486"}],"title":{"id":"11462"},"toolbar":{"id":"11481"},"toolbar_location":null,"width":400,"x_range":{"id":"11464"},"x_scale":{"id":"11468"},"y_range":{"id":"11466"},"y_scale":{"id":"11470"}},"id":"11461","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11493","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11490"},"major_label_policy":{"id":"11491"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11473"}},"id":"11472","type":"LinearAxis"},{"attributes":{"data_source":{"id":"11459"},"glyph":{"id":"11484"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11485"},"view":{"id":"11487"}},"id":"11486","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"11472"},"ticker":null,"visible":false},"id":"11475","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"uATgn+K9kUCyaDo7Kb2RQC2wx0RqsZFAipKQSGugkUCjdVQ1EZ+RQGwiMxdokpFAL/1LUvmJkUBQGmoUYvaRQMP1KFyv9ZFA+FW5UNnokUDUYBqGr9aRQCk+PiE71ZFAh+C4jMvHkUB4DmWo+r6RQMdLN4nhLpJA1IIXfTUukkCgF+5cSCCSQB8vpMPzDJJArwYoDWULkkChnj4CL/2RQOIDO/7785FAPX0E/mBnkkDDK0meu2aSQLb3qSrkV5JAaf0tAThDkkA1zxH5jkGSQLxcxHeSMpJATfkQVP0okkDVko5y4J+SQNS4N79Bn5JALbDHRIqPkkC0y7c+fHmSQLuX++S4d5JA1hpK7fVnkkCWCiqq/l2SQEzEW+df2JJA5UUm4MfXkkDHTKJeMMeSQP6ZQXzAr5JAQmDl0OKtkkDx2M9iWZ2SQAAAAAAAk5JAw/UoXN8Qk0D20hQBThCTQGDpfHjW/pJASWjLuQTmkkDIKM+8DOSSQAuXVdi80pJAavXVVQHIkkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11495"},"selection_policy":{"id":"11496"}},"id":"11459","type":"ColumnDataSource"},{"attributes":{},"id":"11473","type":"BasicTicker"},{"attributes":{},"id":"11477","type":"BasicTicker"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11460","type":"LinearColorMapper"},{"attributes":{},"id":"11494","type":"AllLabels"},{"attributes":{"text":"Toronto \\u2192 Thunder Bay"},"id":"11462","type":"Title"},{"attributes":{"active_multi":null,"tools":[{"id":"11480"}]},"id":"11481","type":"Toolbar"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11480","type":"HoverTool"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11493"},"major_label_policy":{"id":"11494"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11477"}},"id":"11476","type":"LinearAxis"},{"attributes":{"end":6},"id":"11464","type":"Range1d"},{"attributes":{"end":6},"id":"11466","type":"Range1d"},{"attributes":{},"id":"11470","type":"LinearScale"},{"attributes":{},"id":"11490","type":"BasicTickFormatter"}],"root_ids":["11461"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"a7052a60-2486-46de-9c65-4cb898faafaa","root_ids":["11461"],"roots":{"11461":"947f30c3-7bab-4268-91d2-cf8b12de9d28"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"0830d9c8-9f48-4ba6-8d72-acc58936ce9e":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11533","type":"Selection"},{"attributes":{},"id":"11508","type":"LinearScale"},{"attributes":{"source":{"id":"11497"}},"id":"11525","type":"CDSView"},{"attributes":{},"id":"11534","type":"UnionRenderers"},{"attributes":{"below":[{"id":"11510"}],"center":[{"id":"11513"},{"id":"11517"}],"height":400,"left":[{"id":"11514"}],"renderers":[{"id":"11524"}],"title":{"id":"11500"},"toolbar":{"id":"11519"},"toolbar_location":null,"width":400,"x_range":{"id":"11502"},"x_scale":{"id":"11506"},"y_range":{"id":"11504"},"y_scale":{"id":"11508"}},"id":"11499","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"11502","type":"Range1d"},{"attributes":{},"id":"11531","type":"BasicTickFormatter"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11498","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"11497"},"glyph":{"id":"11522"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11523"},"view":{"id":"11525"}},"id":"11524","type":"GlyphRenderer"},{"attributes":{},"id":"11511","type":"BasicTicker"},{"attributes":{"axis":{"id":"11514"},"dimension":1,"ticker":null,"visible":false},"id":"11517","type":"Grid"},{"attributes":{},"id":"11532","type":"AllLabels"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11518","type":"HoverTool"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11528"},"major_label_policy":{"id":"11529"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11511"}},"id":"11510","type":"LinearAxis"},{"attributes":{},"id":"11515","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"11518"}]},"id":"11519","type":"Toolbar"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11531"},"major_label_policy":{"id":"11532"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11515"}},"id":"11514","type":"LinearAxis"},{"attributes":{},"id":"11529","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11498"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11522","type":"Rect"},{"attributes":{"axis":{"id":"11510"},"ticker":null,"visible":false},"id":"11513","type":"Grid"},{"attributes":{},"id":"11528","type":"BasicTickFormatter"},{"attributes":{"text":"Toronto \\u2192 Toledo"},"id":"11500","type":"Title"},{"attributes":{},"id":"11506","type":"LinearScale"},{"attributes":{"data":{"val":{"__ndarray__":"ZrCYx7CeeUDXo3A9Csd5QMjvbfqz7XlAgpg6fv78eUBifajZCCZ6QPLHWX06NXpAnK7dLDQbekC9KmG3+fx5QH2mqEQDK3pAY3/ZPXlSekDHmjaIm2J6QLJ3kOiPjnpAsdAY99CeekDDaRxFUYN6QKaSpuZ3eHpAr1aS4d2MekD+DkWBPrd6QDz1SIMb5HpAAnJ49xb3ekBjsfJwZwh7QPdMQF1u63pAAiuHFlneekB0n3e+2hB7QKH4MeauOHtAdBseDIZLe0CamZmZeV97QBSSzOr9cXtAHgh/dYtTe0CfZGE+b2B7QH5O5sSDdntAMC/APjqme0CsQfOU8LJ7QGC/cWPEx3tAxnKmZJTbe0BFw72NqLt7QJsOUxH9yntAfSQlPWz/e0AI5ujx+wx8QNY/4x1bGnxAGb1kLQ8wfEB3U4DeKkV8QGt+/KXFI3xATG9/LrotfEA84BUcWWV8QOCcEaW9c3xADWa4psWBfEDf4jz3WZh8QCk0WljBrnxAn2EgvuKLfEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11533"},"selection_policy":{"id":"11534"}},"id":"11497","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11498"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11523","type":"Rect"},{"attributes":{"end":6},"id":"11504","type":"Range1d"}],"root_ids":["11499"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"0830d9c8-9f48-4ba6-8d72-acc58936ce9e","root_ids":["11499"],"roots":{"11499":"e9cb43b1-a1ca-481d-80f3-30aee2298eb4"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"514ee3b5-3ae3-4ced-b9f0-7ad9d6b0d18f":{"defs":[],"roots":{"references":[{"attributes":{"end":6},"id":"11542","type":"Range1d"},{"attributes":{},"id":"11544","type":"LinearScale"},{"attributes":{"end":6},"id":"11540","type":"Range1d"},{"attributes":{},"id":"11572","type":"UnionRenderers"},{"attributes":{},"id":"11549","type":"BasicTicker"},{"attributes":{"text":"Toronto \\u2192 Windsor"},"id":"11538","type":"Title"},{"attributes":{},"id":"11569","type":"BasicTickFormatter"},{"attributes":{},"id":"11546","type":"LinearScale"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11566"},"major_label_policy":{"id":"11567"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11549"}},"id":"11548","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11569"},"major_label_policy":{"id":"11570"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11553"}},"id":"11552","type":"LinearAxis"},{"attributes":{"axis":{"id":"11548"},"ticker":null,"visible":false},"id":"11551","type":"Grid"},{"attributes":{"data_source":{"id":"11535"},"glyph":{"id":"11560"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11561"},"view":{"id":"11563"}},"id":"11562","type":"GlyphRenderer"},{"attributes":{},"id":"11570","type":"AllLabels"},{"attributes":{"axis":{"id":"11552"},"dimension":1,"ticker":null,"visible":false},"id":"11555","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"11556"}]},"id":"11557","type":"Toolbar"},{"attributes":{},"id":"11553","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11536"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11561","type":"Rect"},{"attributes":{"data":{"val":{"__ndarray__":"NRmfEyxsc0CVcZ2QB2VzQPGcLSDUXHNAjSoecm5cc0D/MilPCpNzQNIj/EGTxHNASkT4F+H/c0AqMK4CBq1zQILEdvdgpXNAXI/C9Wicc0BYXxOIzZtzQN7FoLhI1nNAv7RNlj8LdEBOCMK61kp0QB5HvfHf7XNAfT81Xrrlc0DHgVfL/dtzQCOUCJ4s23NAvFgYIocZdECrRZ/q61F0QFHMi13MlXRAEl7M4LkudEB3uvPEEyZ0QCVMB6GSG3RA/PDis4sadECb64+LxVx0QJfW8D6YmHRAVZBVAMLgdED5TPbPk290QGQNzSttZnRAkD6cdidbdEDGJdjJ6ll0QHp+B/UDoHRAkY8nk0TfdEBZVB+jtyt1QO1jBb9tsHRA02ZBzfW4dEA8W/baYq90QJFazd9JmXRAWBF/XkLjdEB9IHnn8CV1QF0Y6UWtdnVA4XoUrkfxdEBiQhaz7/l0QO42uSnP73RAXI/C9ajYdEA3pPbHgCZ1QGqxyjudbHVAYdyy6KLBdUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11571"},"selection_policy":{"id":"11572"}},"id":"11535","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11535"}},"id":"11563","type":"CDSView"},{"attributes":{},"id":"11566","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11536"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11560","type":"Rect"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11536","type":"LinearColorMapper"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11556","type":"HoverTool"},{"attributes":{"below":[{"id":"11548"}],"center":[{"id":"11551"},{"id":"11555"}],"height":400,"left":[{"id":"11552"}],"renderers":[{"id":"11562"}],"title":{"id":"11538"},"toolbar":{"id":"11557"},"toolbar_location":null,"width":400,"x_range":{"id":"11540"},"x_scale":{"id":"11544"},"y_range":{"id":"11542"},"y_scale":{"id":"11546"}},"id":"11537","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11567","type":"AllLabels"},{"attributes":{},"id":"11571","type":"Selection"}],"root_ids":["11537"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"514ee3b5-3ae3-4ced-b9f0-7ad9d6b0d18f","root_ids":["11537"],"roots":{"11537":"a4899c7b-e831-4dc0-8db1-94e6cdb3980c"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"7805b325-a7b0-48ea-af70-1a6a9c1ae0fb":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11608","type":"AllLabels"},{"attributes":{"end":6},"id":"11578","type":"Range1d"},{"attributes":{},"id":"11609","type":"Selection"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11604"},"major_label_policy":{"id":"11605"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11587"}},"id":"11586","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11607"},"major_label_policy":{"id":"11608"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11591"}},"id":"11590","type":"LinearAxis"},{"attributes":{"below":[{"id":"11586"}],"center":[{"id":"11589"},{"id":"11593"}],"height":400,"left":[{"id":"11590"}],"renderers":[{"id":"11600"}],"title":{"id":"11576"},"toolbar":{"id":"11595"},"toolbar_location":null,"width":400,"x_range":{"id":"11578"},"x_scale":{"id":"11582"},"y_range":{"id":"11580"},"y_scale":{"id":"11584"}},"id":"11575","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"11586"},"ticker":null,"visible":false},"id":"11589","type":"Grid"},{"attributes":{},"id":"11610","type":"UnionRenderers"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11574","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"11590"},"dimension":1,"ticker":null,"visible":false},"id":"11593","type":"Grid"},{"attributes":{},"id":"11591","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11574"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11598","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11574"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11599","type":"Rect"},{"attributes":{"text":"Windsor \\u2192 Chicago"},"id":"11576","type":"Title"},{"attributes":{"data_source":{"id":"11573"},"glyph":{"id":"11598"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11599"},"view":{"id":"11601"}},"id":"11600","type":"GlyphRenderer"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11594","type":"HoverTool"},{"attributes":{},"id":"11582","type":"LinearScale"},{"attributes":{"source":{"id":"11573"}},"id":"11601","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11594"}]},"id":"11595","type":"Toolbar"},{"attributes":{},"id":"11605","type":"AllLabels"},{"attributes":{"end":6},"id":"11580","type":"Range1d"},{"attributes":{},"id":"11604","type":"BasicTickFormatter"},{"attributes":{},"id":"11584","type":"LinearScale"},{"attributes":{},"id":"11587","type":"BasicTicker"},{"attributes":{},"id":"11607","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"Lbu7KeCfdkCqDONusJl2QOf7qfHSsnZAw+ORLszIdkDK6DaXsQF3QPpysEi9NXdAYza3+Ipzd0DIf9zZkvJ2QKceDrcI3HZANe84Rcf2dkB3b6Ab1Qx3QBm9ZC0vS3dAhfcLLNaCd0CHjKJi98R3QNkPDHt1NndAozA5/2Aed0CC4seYuzp3QCpxHeNKUndAdbl3w6yUd0ADVIIP7893QJ+6qMxjFnhAdYr6yV16d0CtaklHuWB3QNDVVuyvfndA3XKaqsCXd0DRtYpZKt53QICw+PIHHXhAxBCUNtBneEDNzMzMTL53QKp8dI8Ro3dAHcnlP6TCd0CDTDJyNt13QC2yne+nJ3hACzVU1iBqeEDbPpqgPLl4QCQPn887AnhA52Id2Bv5d0BqvHSTmAZ4QDdOrzmsInhA3yku2BdxeECJkcq5Obd4QACVhQqpCnlAiXlW0ipGeEC6/OKtbjx4QLivA+eMSnhA6k8sASJoeEA8cv/sgrp4QAfuQJ1SBHlAF8OLdBVceUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11609"},"selection_policy":{"id":"11610"}},"id":"11573","type":"ColumnDataSource"}],"root_ids":["11575"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"7805b325-a7b0-48ea-af70-1a6a9c1ae0fb","root_ids":["11575"],"roots":{"11575":"bef0c0cb-9ed0-438d-af09-1711f7b9effe"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"f39c4286-f9d1-456c-acff-fc815cbe5c76":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11612"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11637","type":"Rect"},{"attributes":{},"id":"11622","type":"LinearScale"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11612","type":"LinearColorMapper"},{"attributes":{},"id":"11647","type":"Selection"},{"attributes":{},"id":"11625","type":"BasicTicker"},{"attributes":{},"id":"11645","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"11611"},"glyph":{"id":"11636"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11637"},"view":{"id":"11639"}},"id":"11638","type":"GlyphRenderer"},{"attributes":{},"id":"11648","type":"UnionRenderers"},{"attributes":{"end":6},"id":"11616","type":"Range1d"},{"attributes":{},"id":"11646","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11642"},"major_label_policy":{"id":"11643"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11625"}},"id":"11624","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11645"},"major_label_policy":{"id":"11646"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11629"}},"id":"11628","type":"LinearAxis"},{"attributes":{"axis":{"id":"11624"},"ticker":null,"visible":false},"id":"11627","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"FXDP8+cTbUAR7K6i9RJtQJZO2gqQAG1AM56tKEqQbUAAb4EERRBuQFKHcCdsgW5AvrbIh6ohb0C6h4TvvXNtQJdjw+QXc21AKDir9MlfbUDmECfmj/ltQP7UeOlmgm5AgvefRmv7bkD+1HjpJqdvQF6fOeuT021AOSuiJjrTbUDUcUbeA79tQLPTaqPVYm5A+zpwzoj0bkCXFwVmanVvQJ95lKVRFnBAHQe55mkzbkCNor2wKwZuQGZbF8g9Hm5AZkbkYBvMbkD5oGezqmZvQKw3aoVp729AsmCH1g9ZcEDCHm7iP5NuQKEhLd+EY25AE5WysXd9bkAZuV0eYTVvQPcGX5jM2G9A7tNMUrQ0cEDSb18HzptwQGY2I94V825AtaCcDd7AbkClfoObsdxuQHByCdGrnm9AejarPnclcED5Y//hs3FwQPJ+NziM3nBAJZ6i2etSb0Dkb9Y7Nx5vQFK4HoXrO29A9X3djhUEcEB56SYxiF5wQBEcl3GzrnBABWYqaUohcUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11647"},"selection_policy":{"id":"11648"}},"id":"11611","type":"ColumnDataSource"},{"attributes":{},"id":"11642","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11628"},"dimension":1,"ticker":null,"visible":false},"id":"11631","type":"Grid"},{"attributes":{},"id":"11629","type":"BasicTicker"},{"attributes":{},"id":"11643","type":"AllLabels"},{"attributes":{"text":"Windsor \\u2192 Cleveland"},"id":"11614","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11632","type":"HoverTool"},{"attributes":{},"id":"11620","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"11632"}]},"id":"11633","type":"Toolbar"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11612"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11636","type":"Rect"},{"attributes":{"source":{"id":"11611"}},"id":"11639","type":"CDSView"},{"attributes":{"end":6},"id":"11618","type":"Range1d"},{"attributes":{"below":[{"id":"11624"}],"center":[{"id":"11627"},{"id":"11631"}],"height":400,"left":[{"id":"11628"}],"renderers":[{"id":"11638"}],"title":{"id":"11614"},"toolbar":{"id":"11633"},"toolbar_location":null,"width":400,"x_range":{"id":"11616"},"x_scale":{"id":"11620"},"y_range":{"id":"11618"},"y_scale":{"id":"11622"}},"id":"11613","subtype":"Figure","type":"Plot"}],"root_ids":["11613"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"f39c4286-f9d1-456c-acff-fc815cbe5c76","root_ids":["11613"],"roots":{"11613":"d710f518-fc62-487d-93ed-84cb70dbe9f0"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"66edc7eb-7004-4990-96ce-064b4ffec459":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11663","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11649"},"glyph":{"id":"11674"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11675"},"view":{"id":"11677"}},"id":"11676","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11650"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11674","type":"Rect"},{"attributes":{},"id":"11686","type":"UnionRenderers"},{"attributes":{},"id":"11684","type":"AllLabels"},{"attributes":{"below":[{"id":"11662"}],"center":[{"id":"11665"},{"id":"11669"}],"height":400,"left":[{"id":"11666"}],"renderers":[{"id":"11676"}],"title":{"id":"11652"},"toolbar":{"id":"11671"},"toolbar_location":null,"width":400,"x_range":{"id":"11654"},"x_scale":{"id":"11658"},"y_range":{"id":"11656"},"y_scale":{"id":"11660"}},"id":"11651","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"11654","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11650","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11680"},"major_label_policy":{"id":"11681"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11663"}},"id":"11662","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11683"},"major_label_policy":{"id":"11684"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11667"}},"id":"11666","type":"LinearAxis"},{"attributes":{"axis":{"id":"11662"},"ticker":null,"visible":false},"id":"11665","type":"Grid"},{"attributes":{},"id":"11683","type":"BasicTickFormatter"},{"attributes":{},"id":"11680","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11666"},"dimension":1,"ticker":null,"visible":false},"id":"11669","type":"Grid"},{"attributes":{},"id":"11667","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11650"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11675","type":"Rect"},{"attributes":{},"id":"11681","type":"AllLabels"},{"attributes":{"text":"Windsor \\u2192 Detroit"},"id":"11652","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11670","type":"HoverTool"},{"attributes":{},"id":"11658","type":"LinearScale"},{"attributes":{"source":{"id":"11649"}},"id":"11677","type":"CDSView"},{"attributes":{"data":{"val":{"__ndarray__":"RwN4CyTuSkA2sV0tuZBKQKAFulkwE0tAnJEYb3GOS0DOEo2DBbVNQDXILJTvQlBAbtHRwzNjUUBCYOXQIg5MQIQdtXjnrEtAfbL/jf82TEAzcSfo4bdMQH+4L5A1BE9ARH5orN4AUUB3bF+bKDVSQDy9UpYhLk1A0YkMxBXJTEBbX0XCzlpNQMpQNmFS4U1AUXJezrIpUEBSNKTEzb5RQLhK4nIdB1NANxrAWyBOTkAf9mMPROVNQDgMi/adfk5AYTBF2sIKT0Aqxa/UStFQQM3E10uRXlJAweVvShLZU0Aydy0hH25PQPvb0FpyAU9AFrnQKm2iT0D8B6qpGRpQQKta81+3eFFAvHyImT8cU0ACxPIhB6tUQLAD54yoGlBAJCQUU9AOUEBkZ8AP/WJQQAC7JubRrlBAjAvupBEgUkDjdy7n7dlTQAtfgPn7fFVAYhBYObSoUEBL2r9455xQQJMIhe+a9FBAyyquIopDUUA0efPpa8dSQH3+IDcouFRAFPoN0fBOVkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11685"},"selection_policy":{"id":"11686"}},"id":"11649","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"11670"}]},"id":"11671","type":"Toolbar"},{"attributes":{"end":6},"id":"11656","type":"Range1d"},{"attributes":{},"id":"11685","type":"Selection"},{"attributes":{},"id":"11660","type":"LinearScale"}],"root_ids":["11651"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"66edc7eb-7004-4990-96ce-064b4ffec459","root_ids":["11651"],"roots":{"11651":"e248a656-79bd-4be6-9746-0f0fef9b4993"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"47cc6342-96f1-4cd8-9a48-4a6093f95e82":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"field":"val","transform":{"id":"11688"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11712","type":"Rect"},{"attributes":{"end":6},"id":"11692","type":"Range1d"},{"attributes":{"below":[{"id":"11700"}],"center":[{"id":"11703"},{"id":"11707"}],"height":400,"left":[{"id":"11704"}],"renderers":[{"id":"11714"}],"title":{"id":"11690"},"toolbar":{"id":"11709"},"toolbar_location":null,"width":400,"x_range":{"id":"11692"},"x_scale":{"id":"11696"},"y_range":{"id":"11694"},"y_scale":{"id":"11698"}},"id":"11689","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11722","type":"AllLabels"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11688","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11718"},"major_label_policy":{"id":"11719"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11701"}},"id":"11700","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11721"},"major_label_policy":{"id":"11722"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11705"}},"id":"11704","type":"LinearAxis"},{"attributes":{"axis":{"id":"11700"},"ticker":null,"visible":false},"id":"11703","type":"Grid"},{"attributes":{"data":{"val":{"__ndarray__":"3+rvW2OajEDLoUW284+MQL73N2h/foxAMCqpE3B9jEC9UStMP3SMQDpXOVnPc4xAVOOlm8R8jED0jxkDJu6MQIpS5/YH0YxAFK5H4XrQjEDXo3A9is+MQPQz9brVxYxA75Y/OoDFjEDhehSuV8+MQEdPNorxPI1AVyAfmfMijUBrZFdadiKNQATnjCitIY1Ah8xLtMoCjUCk1kUbMReNQG8Sg8DqIY1A+eQXFGyQjUAdWmQ733SNQMiuWdNxdI1AMCqpE9BzjUBLLrWUMlONQGCqPvzhaI1A/Knx0n10jUCk5gae5uONQOOTqd3Kxo1AHmVpTG3GjUBdbcX+8sWNQBUkEXWao41AFepE3ZK6jUCJQWDlEMeNQFZ86CdhN45Ar2Hhf7YYjkB1G3nFaBiOQIqw4ekVGI5A3xltVQL0jUDKKUu+QwyOQBfZzvejGY5AOiqSCs6GjkB1myYiomqOQNf7jXasUY5AtvP91DhqjkCie9Y1akSOQIb9Q5/0XY5ApHA9CjdsjkA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11723"},"selection_policy":{"id":"11724"}},"id":"11687","type":"ColumnDataSource"},{"attributes":{},"id":"11718","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11704"},"dimension":1,"ticker":null,"visible":false},"id":"11707","type":"Grid"},{"attributes":{},"id":"11705","type":"BasicTicker"},{"attributes":{},"id":"11719","type":"AllLabels"},{"attributes":{"text":"Windsor \\u2192 Duluth"},"id":"11690","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11708","type":"HoverTool"},{"attributes":{},"id":"11696","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"11708"}]},"id":"11709","type":"Toolbar"},{"attributes":{"source":{"id":"11687"}},"id":"11715","type":"CDSView"},{"attributes":{"end":6},"id":"11694","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11688"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11713","type":"Rect"},{"attributes":{},"id":"11698","type":"LinearScale"},{"attributes":{},"id":"11723","type":"Selection"},{"attributes":{},"id":"11724","type":"UnionRenderers"},{"attributes":{},"id":"11701","type":"BasicTicker"},{"attributes":{},"id":"11721","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"11687"},"glyph":{"id":"11712"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11713"},"view":{"id":"11715"}},"id":"11714","type":"GlyphRenderer"}],"root_ids":["11689"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"47cc6342-96f1-4cd8-9a48-4a6093f95e82","root_ids":["11689"],"roots":{"11689":"03c090d4-41e7-447f-a024-77de43eb4531"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"18292ac4-c106-4047-9809-eec236450aea":{"defs":[],"roots":{"references":[{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11726","type":"LinearColorMapper"},{"attributes":{},"id":"11760","type":"AllLabels"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11756"},"major_label_policy":{"id":"11757"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11739"}},"id":"11738","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11726"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11750","type":"Rect"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11759"},"major_label_policy":{"id":"11760"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11743"}},"id":"11742","type":"LinearAxis"},{"attributes":{"axis":{"id":"11738"},"ticker":null,"visible":false},"id":"11741","type":"Grid"},{"attributes":{"below":[{"id":"11738"}],"center":[{"id":"11741"},{"id":"11745"}],"height":400,"left":[{"id":"11742"}],"renderers":[{"id":"11752"}],"title":{"id":"11728"},"toolbar":{"id":"11747"},"toolbar_location":null,"width":400,"x_range":{"id":"11730"},"x_scale":{"id":"11734"},"y_range":{"id":"11732"},"y_scale":{"id":"11736"}},"id":"11727","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11756","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11742"},"dimension":1,"ticker":null,"visible":false},"id":"11745","type":"Grid"},{"attributes":{},"id":"11743","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11726"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11751","type":"Rect"},{"attributes":{},"id":"11757","type":"AllLabels"},{"attributes":{},"id":"11761","type":"Selection"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11746","type":"HoverTool"},{"attributes":{"end":6},"id":"11732","type":"Range1d"},{"attributes":{"source":{"id":"11725"}},"id":"11753","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"11746"}]},"id":"11747","type":"Toolbar"},{"attributes":{},"id":"11739","type":"BasicTicker"},{"attributes":{},"id":"11762","type":"UnionRenderers"},{"attributes":{"end":6},"id":"11730","type":"Range1d"},{"attributes":{},"id":"11734","type":"LinearScale"},{"attributes":{"data_source":{"id":"11725"},"glyph":{"id":"11750"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11751"},"view":{"id":"11753"}},"id":"11752","type":"GlyphRenderer"},{"attributes":{},"id":"11759","type":"BasicTickFormatter"},{"attributes":{"data":{"val":{"__ndarray__":"mo5K+7Cob0AXRQ98zHhvQPDNJQuOXm9AhtSjX5E4b0AP+ohORThvQN+p2zTRoW9Ar92HzVEQcEDIbrCBPg1wQOAO1CnP5m9At2UbE73Kb0AbGC/MeKJvQPtS5LX3om9ARS3NrVAOcEBuWXShiE5wQH0/NV46RnBAYpSx62gqcEDNpm0NdhtwQNktXRwwBnBA9NWfDtUGcECelVkp6UdwQCCte3W/jHBAMhC6OjZ/cEBUIXlCamFwQLByaJGNUXBAo8+i0iM7cEBqgk1CLjxwQOnVAKWBgXBA3ihoSfbKcEDm4D4XMrhwQEauQJlrmHBAlD5jFaWHcEBuceiIF3BwQO1W4HWHcXBANBaoIBq7cECdpFQdLQlxQKjZqPMt8XBAKhMj8GzPcECFMkOZvL1wQDkTLj8LpXBAYwOOqeCmcEB/Vk+csvRwQFwgQfFjR3FAXaot0CkqcUAcoOpGbgZxQGj+PR3U83BABLVz9f7ZcEDZrzvdOdxwQNi+2xdLLnFAGpwtxZqFcUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11761"},"selection_policy":{"id":"11762"}},"id":"11725","type":"ColumnDataSource"},{"attributes":{"text":"Windsor \\u2192 Hamilton"},"id":"11728","type":"Title"},{"attributes":{},"id":"11736","type":"LinearScale"}],"root_ids":["11727"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"18292ac4-c106-4047-9809-eec236450aea","root_ids":["11727"],"roots":{"11727":"a3490bcb-1c02-438f-9102-d0492a65106d"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"db71f5d8-4d51-4a7e-beb3-84a114b4c144":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11797"},"major_label_policy":{"id":"11798"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11781"}},"id":"11780","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"Rrbz/dQTf0AnV2dr8yR/QOdspuciJn9A6AvGLSs4f0C00CkjCTd/QGN4ka6eGn9AKs8X1ujffkB/arx0E4Z/QP3qu2xlmH9AMHmoEqqZf0DO5zen7ax/QCSSjazhq39A15r3SZ+Nf0BQZPcuD09/QLgehetR+H9Aaj8It+sFgEC9QtWemAaAQNNNYhDYEIBA0T3rGl0QgECscqHyTwCAQHb51oc1vn9AeekmMUg1gEBO9b+3pD+AQOJIVjRcQIBAv6coTTlLgECJHp1fyUqAQOaDVEDQOYBAVdtN8K0WgECWQ4tsZ26AQDk/arhdeYBAB0/XyR96gECyleGJmoWAQEL/TqQ1hYBAJin6jVBzgEDopb0cQU6AQLKd76eGp4BAJIkUuRazgEAsVVhf47OAQJ7vp8b7v4BA+t8A6aG/gEBgOq3b0KyAQHxwLUnUhYBAj8L1KFz4gEAIP8y5z+yAQFFb2fSm7YBAikluA136gECywLItDvqAQKHfUilR5oBAFc+PdWe9gEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11799"},"selection_policy":{"id":"11800"}},"id":"11763","type":"ColumnDataSource"},{"attributes":{},"id":"11774","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11784","type":"HoverTool"},{"attributes":{},"id":"11794","type":"BasicTickFormatter"},{"attributes":{"end":6},"id":"11770","type":"Range1d"},{"attributes":{"text":"Windsor \\u2192 Milwaukee"},"id":"11766","type":"Title"},{"attributes":{"end":6},"id":"11768","type":"Range1d"},{"attributes":{},"id":"11795","type":"AllLabels"},{"attributes":{},"id":"11799","type":"Selection"},{"attributes":{"axis":{"id":"11780"},"dimension":1,"ticker":null,"visible":false},"id":"11783","type":"Grid"},{"attributes":{"source":{"id":"11763"}},"id":"11791","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11764"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11789","type":"Rect"},{"attributes":{},"id":"11800","type":"UnionRenderers"},{"attributes":{},"id":"11797","type":"BasicTickFormatter"},{"attributes":{},"id":"11772","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"11784"}]},"id":"11785","type":"Toolbar"},{"attributes":{"data_source":{"id":"11763"},"glyph":{"id":"11788"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11789"},"view":{"id":"11791"}},"id":"11790","type":"GlyphRenderer"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11794"},"major_label_policy":{"id":"11795"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11777"}},"id":"11776","type":"LinearAxis"},{"attributes":{"axis":{"id":"11776"},"ticker":null,"visible":false},"id":"11779","type":"Grid"},{"attributes":{},"id":"11798","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11764"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11788","type":"Rect"},{"attributes":{},"id":"11781","type":"BasicTicker"},{"attributes":{"below":[{"id":"11776"}],"center":[{"id":"11779"},{"id":"11783"}],"height":400,"left":[{"id":"11780"}],"renderers":[{"id":"11790"}],"title":{"id":"11766"},"toolbar":{"id":"11785"},"toolbar_location":null,"width":400,"x_range":{"id":"11768"},"x_scale":{"id":"11772"},"y_range":{"id":"11770"},"y_scale":{"id":"11774"}},"id":"11765","subtype":"Figure","type":"Plot"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11764","type":"LinearColorMapper"},{"attributes":{},"id":"11777","type":"BasicTicker"}],"root_ids":["11765"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"db71f5d8-4d51-4a7e-beb3-84a114b4c144","root_ids":["11765"],"roots":{"11765":"5f96a671-258c-42e2-8f75-37930c9607c0"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"672a5aef-61f2-40be-a6a9-56d4aba00394":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11832","type":"BasicTickFormatter"},{"attributes":{"text":"Windsor \\u2192 Montreal"},"id":"11804","type":"Title"},{"attributes":{},"id":"11810","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11802"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11827","type":"Rect"},{"attributes":{"end":6},"id":"11808","type":"Range1d"},{"attributes":{"axis":{"id":"11814"},"ticker":null,"visible":false},"id":"11817","type":"Grid"},{"attributes":{},"id":"11837","type":"Selection"},{"attributes":{},"id":"11833","type":"AllLabels"},{"attributes":{},"id":"11812","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11822","type":"HoverTool"},{"attributes":{},"id":"11815","type":"BasicTicker"},{"attributes":{"source":{"id":"11801"}},"id":"11829","type":"CDSView"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11802"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11826","type":"Rect"},{"attributes":{},"id":"11838","type":"UnionRenderers"},{"attributes":{"below":[{"id":"11814"}],"center":[{"id":"11817"},{"id":"11821"}],"height":400,"left":[{"id":"11818"}],"renderers":[{"id":"11828"}],"title":{"id":"11804"},"toolbar":{"id":"11823"},"toolbar_location":null,"width":400,"x_range":{"id":"11806"},"x_scale":{"id":"11810"},"y_range":{"id":"11808"},"y_scale":{"id":"11812"}},"id":"11803","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"11806","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11802","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"11818"},"dimension":1,"ticker":null,"visible":false},"id":"11821","type":"Grid"},{"attributes":{"data_source":{"id":"11801"},"glyph":{"id":"11826"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11827"},"view":{"id":"11829"}},"id":"11828","type":"GlyphRenderer"},{"attributes":{},"id":"11835","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11832"},"major_label_policy":{"id":"11833"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11815"}},"id":"11814","type":"LinearAxis"},{"attributes":{},"id":"11819","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"11822"}]},"id":"11823","type":"Toolbar"},{"attributes":{},"id":"11836","type":"AllLabels"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11835"},"major_label_policy":{"id":"11836"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11819"}},"id":"11818","type":"LinearAxis"},{"attributes":{"data":{"val":{"__ndarray__":"gnNGlFZ4hUDY9tEEZYeFQBZQqKcfkYVAmFcJcTCrhUD26ojo3KOFQDuMSX9/rYVA3ybtV+ulhUBSuB6Fe7uFQGjbepfszoVAR1hUxDnVhUCM5OHzafCFQBLJRtaQ6IVAZoLhXJPyhUBUlRFyieqFQCL99nWg/oVAIYvZN6wXhkD/5sWJjyqGQFlEXiCiNYZAeSf6160/hkCSeHk6pzeGQM+XKIwnL4ZA8kHPZsVBhkAHFKBcmVaGQLW7rC5cb4ZALTjNTNp6hkCiKqbSP4WGQL1uERi7fIZAQwZNpsVzhkDx9EpZxoSGQKLUXkSbmoZAa5CT0yi0hkD6l0l5EsCGQNHBRM3RyoZA6WSp9c7BhkC3dHHAY7iGQATnjCh914ZAdHbXfufZhkAhZXp49fiGQMb3xaVKBYdA+sTwx2MQh0AUW0HT4gaHQCzjldoB/YZAiUFg5dAah0C91u/TYh2HQNc5YR3CPYdAk1dC0oJKh0ApXI/C9VWHQEBR2bD2S4dAp+Ws9J9Bh0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11837"},"selection_policy":{"id":"11838"}},"id":"11801","type":"ColumnDataSource"}],"root_ids":["11803"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"672a5aef-61f2-40be-a6a9-56d4aba00394","root_ids":["11803"],"roots":{"11803":"42e6ff6b-7f1d-4d8b-be89-02d369c66364"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"0d7bbaab-21d2-4e34-b3d3-8375eb4d6add":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11848","type":"LinearScale"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11840"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11864","type":"Rect"},{"attributes":{"end":6},"id":"11846","type":"Range1d"},{"attributes":{},"id":"11871","type":"AllLabels"},{"attributes":{},"id":"11850","type":"LinearScale"},{"attributes":{},"id":"11875","type":"Selection"},{"attributes":{},"id":"11853","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11840"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11865","type":"Rect"},{"attributes":{},"id":"11876","type":"UnionRenderers"},{"attributes":{"end":6},"id":"11844","type":"Range1d"},{"attributes":{"below":[{"id":"11852"}],"center":[{"id":"11855"},{"id":"11859"}],"height":400,"left":[{"id":"11856"}],"renderers":[{"id":"11866"}],"title":{"id":"11842"},"toolbar":{"id":"11861"},"toolbar_location":null,"width":400,"x_range":{"id":"11844"},"x_scale":{"id":"11848"},"y_range":{"id":"11846"},"y_scale":{"id":"11850"}},"id":"11841","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11860","type":"HoverTool"},{"attributes":{},"id":"11873","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11870"},"major_label_policy":{"id":"11871"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11853"}},"id":"11852","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11840","type":"LinearColorMapper"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11873"},"major_label_policy":{"id":"11874"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11857"}},"id":"11856","type":"LinearAxis"},{"attributes":{"axis":{"id":"11852"},"ticker":null,"visible":false},"id":"11855","type":"Grid"},{"attributes":{"data_source":{"id":"11839"},"glyph":{"id":"11864"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11865"},"view":{"id":"11867"}},"id":"11866","type":"GlyphRenderer"},{"attributes":{},"id":"11874","type":"AllLabels"},{"attributes":{"axis":{"id":"11856"},"dimension":1,"ticker":null,"visible":false},"id":"11859","type":"Grid"},{"attributes":{},"id":"11857","type":"BasicTicker"},{"attributes":{"source":{"id":"11839"}},"id":"11867","type":"CDSView"},{"attributes":{"data":{"val":{"__ndarray__":"spXhiXrgjUD9tQYAKMqNQGO9rOTutI1Ajqj1I3rJjUDrMTYZusiNQPOOU3SEx41AeMdzx1y9jUBZQcLmwjKOQIKhWLhWG45Ai44/rBIjjkCLZNnd/SGOQGa+g5/III5AAAAAAFAJjkAEKtKzPxWOQFdbsb/sgo5ArkfhemR0jkBiUtc1xXuOQIGMypeBeo5A4UrRJdd4jkAdWmQ7H2COQJYgI6AibY5AqenELxbmjkBaZDvfv9uOQGcV7HUh5I5AfUiuUQXTjkBc1x6s5dCOQDm0yHbuto5AKRd0jAXFjkBV3SObC0CPQAwCK4d2NY9AAk3fxsE9j0BzcJ8LiSuPQNZjbDL0KI9AVg4tsr0Nj0C8DcV46ByPQC/dJAYBmo9AZtmTwOadj0CynITSV6ePQL+dRIQfk49AS1zHuAKBj0CUTE7tjGSPQEhwI2XLdI9ApHA9Ctfzj0CkcD0K9/ePQOlGWFTUAJBANWCQ9Ensj0DMfAc/EdmPQI/C9Shcu49A7iJMUa7Mj0A=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11875"},"selection_policy":{"id":"11876"}},"id":"11839","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"11860"}]},"id":"11861","type":"Toolbar"},{"attributes":{},"id":"11870","type":"BasicTickFormatter"},{"attributes":{"text":"Windsor \\u2192 Thunder Bay"},"id":"11842","type":"Title"}],"root_ids":["11841"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"0d7bbaab-21d2-4e34-b3d3-8375eb4d6add","root_ids":["11841"],"roots":{"11841":"d2280ae1-ce4e-4e1b-b879-a83b75fce669"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"0d396325-157c-45f9-8c0f-02b93a8c5a3f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"11909","type":"AllLabels"},{"attributes":{"end":6},"id":"11884","type":"Range1d"},{"attributes":{},"id":"11888","type":"LinearScale"},{"attributes":{},"id":"11911","type":"BasicTickFormatter"},{"attributes":{},"id":"11891","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11877"},"glyph":{"id":"11902"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11903"},"view":{"id":"11905"}},"id":"11904","type":"GlyphRenderer"},{"attributes":{},"id":"11914","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11878"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11902","type":"Rect"},{"attributes":{"below":[{"id":"11890"}],"center":[{"id":"11893"},{"id":"11897"}],"height":400,"left":[{"id":"11894"}],"renderers":[{"id":"11904"}],"title":{"id":"11880"},"toolbar":{"id":"11899"},"toolbar_location":null,"width":400,"x_range":{"id":"11882"},"x_scale":{"id":"11886"},"y_range":{"id":"11884"},"y_scale":{"id":"11888"}},"id":"11879","subtype":"Figure","type":"Plot"},{"attributes":{"end":6},"id":"11882","type":"Range1d"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11878","type":"LinearColorMapper"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11908"},"major_label_policy":{"id":"11909"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11891"}},"id":"11890","type":"LinearAxis"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11911"},"major_label_policy":{"id":"11912"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11895"}},"id":"11894","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"11898"}]},"id":"11899","type":"Toolbar"},{"attributes":{"axis":{"id":"11890"},"ticker":null,"visible":false},"id":"11893","type":"Grid"},{"attributes":{"axis":{"id":"11894"},"dimension":1,"ticker":null,"visible":false},"id":"11897","type":"Grid"},{"attributes":{},"id":"11895","type":"BasicTicker"},{"attributes":{"data":{"val":{"__ndarray__":"FLb6ReSfWkDetxCaE5laQFx5JLnXkFpA3y6gvLQyWkCNMWYBSbpaQIk6vZyjBVxAufR51n9qXUAUrkfheiRbQNyR+2cXWltAPzVeukkSW0BjFSXXg6xaQH/yHDY2PltA7XWc7DChXEB5KpYRTR9eQBWmlHwRqVtAkjk7vuLfW0Aj8Ze7u5NbQC/dJAaBJltAOxM/ayPCW0BRsXs8vjxdQATAHU0a1F5AFZ7hF6gtXEBI4XoUrmVcQNEMPb0tFVxATkEjfX+gW0At1PWfEEZcQLbsWoxL2F1AxfU5iOeIX0AWli6zPrJcQP2Iump561xAtMh2vp+WXECiRbbzfRpcQB+VrNT9yVxAGig63NhzXkDDFath2h5gQBaOe07VNl1AszD6wERxXUCYhLC/ERhdQMCptGp8lFxA27XOCetNXUB+YxksZg9fQKMwOf9AeWBAFobI6Wu7XUBp2DkXEPddQEagVcGDmV1AFK5H4XoOXUDNdoU+2NFdQOOe+Hvzql9AhEvHnKfTYEA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11913"},"selection_policy":{"id":"11914"}},"id":"11877","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11878"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11903","type":"Rect"},{"attributes":{},"id":"11912","type":"AllLabels"},{"attributes":{},"id":"11908","type":"BasicTickFormatter"},{"attributes":{"text":"Windsor \\u2192 Toledo"},"id":"11880","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11898","type":"HoverTool"},{"attributes":{},"id":"11886","type":"LinearScale"},{"attributes":{"source":{"id":"11877"}},"id":"11905","type":"CDSView"},{"attributes":{},"id":"11913","type":"Selection"}],"root_ids":["11879"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"0d396325-157c-45f9-8c0f-02b93a8c5a3f","root_ids":["11879"],"roots":{"11879":"7015d91a-f7f8-4cd7-88f9-0e1acbd77c9a"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"b27cab8d-266c-4a2b-8e61-b3eb2039bebf":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"11915"},"glyph":{"id":"11940"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11941"},"view":{"id":"11943"}},"id":"11942","type":"GlyphRenderer"},{"attributes":{"data":{"val":{"__ndarray__":"ey++aI/ickDcPvVZb+NyQCU1/o5y6nJAvsSzX/LxckBPkUPETTFzQP1AA/uZanNAHSCYo2eec0D8fbVZCyNzQJ9NWCwvKnNA2g78Xnkyc0DMqEO4kzJzQOF86lhldnNAdVAuMqazc0AydsJLcOtzQIr0kUqHY3NAYShxZ7Bqc0CuqeJ8IHNzQOi0uBA1c3NAc2iR7Xy7c0DuX1lpsvxzQFT00fN4OHRA5krzfaeqc0DqnPqbi7JzQIJEyZrHs3NA9phIadazc0A2K5H6Yf5zQGZvhKC+RXRAaUr8m4GFdEBoFx3aketzQFNYTudv83NAVt+vuG70c0AEfdjBd/RzQBIdXQBVQ3RA3n6v18qOdECLyAtEitJ0QKCCDZkcNHRAruu8MlQ0dEAqepbWFTV0QBJhaBoZNXRA4OZDBkiIdEBWjtoO19d0QK1GG+ySH3VAlRaJZIN1dEAXpxB+OHV0QP8UffS8dXRAIUX4crp1dECusCoMO810QM+dBUbjIHVAwpxFlJtsdUA=","dtype":"float64","order":"little","shape":[49]},"x":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6],"y":[6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0,6,5,4,3,2,1,0]},"selected":{"id":"11951"},"selection_policy":{"id":"11952"}},"id":"11915","type":"ColumnDataSource"},{"attributes":{},"id":"11951","type":"Selection"},{"attributes":{},"id":"11952","type":"UnionRenderers"},{"attributes":{"end":6},"id":"11920","type":"Range1d"},{"attributes":{},"id":"11950","type":"AllLabels"},{"attributes":{"fill_color":{"field":"val","transform":{"id":"11916"}},"height":{"value":1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11940","type":"Rect"},{"attributes":{"axis_label":"Coverage \\u03b3","formatter":{"id":"11946"},"major_label_policy":{"id":"11947"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11929"}},"id":"11928","type":"LinearAxis"},{"attributes":{"below":[{"id":"11928"}],"center":[{"id":"11931"},{"id":"11935"}],"height":400,"left":[{"id":"11932"}],"renderers":[{"id":"11942"}],"title":{"id":"11918"},"toolbar":{"id":"11937"},"toolbar_location":null,"width":400,"x_range":{"id":"11920"},"x_scale":{"id":"11924"},"y_range":{"id":"11922"},"y_scale":{"id":"11926"}},"id":"11917","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Uncertainty \\u03be","formatter":{"id":"11949"},"major_label_policy":{"id":"11950"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"11933"}},"id":"11932","type":"LinearAxis"},{"attributes":{"high":1460.927407,"low":34.02725,"palette":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"]},"id":"11916","type":"LinearColorMapper"},{"attributes":{"axis":{"id":"11928"},"ticker":null,"visible":false},"id":"11931","type":"Grid"},{"attributes":{},"id":"11946","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"11932"},"dimension":1,"ticker":null,"visible":false},"id":"11935","type":"Grid"},{"attributes":{},"id":"11933","type":"BasicTicker"},{"attributes":{},"id":"11947","type":"AllLabels"},{"attributes":{"text":"Windsor \\u2192 Toronto"},"id":"11918","type":"Title"},{"attributes":{"callback":null,"tooltips":[["Travel Time","@val{0.0} min"]]},"id":"11936","type":"HoverTool"},{"attributes":{},"id":"11924","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"11936"}]},"id":"11937","type":"Toolbar"},{"attributes":{"source":{"id":"11915"}},"id":"11943","type":"CDSView"},{"attributes":{"end":6},"id":"11922","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"val","transform":{"id":"11916"}},"height":{"value":1},"line_alpha":{"value":0.1},"line_color":{"value":null},"width":{"value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"11941","type":"Rect"},{"attributes":{},"id":"11926","type":"LinearScale"},{"attributes":{},"id":"11929","type":"BasicTicker"},{"attributes":{},"id":"11949","type":"BasicTickFormatter"}],"root_ids":["11917"]},"title":"Bokeh Application","version":"2.3.2"}}';
                var render_items = [{"docid":"b27cab8d-266c-4a2b-8e61-b3eb2039bebf","root_ids":["11917"],"roots":{"11917":"692b11d5-80f0-48f5-89a8-1c2742c8cfcb"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
