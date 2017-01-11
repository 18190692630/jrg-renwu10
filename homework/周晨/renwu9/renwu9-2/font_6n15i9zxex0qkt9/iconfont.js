;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jirengulogored" viewBox="0 0 2388 1024">' +
    '' +
    '<path d="M1711.138282 777.129549s49.187773-4.657933 111.976711-4.657933 119.243086 4.657933 119.243086 4.657933l-141.22853-158.742358-89.991267 158.742358z" fill="#d81e06" ></path>' +
    '' +
    '<path d="M2189.042213 492.622999c-57.0131-376.919942 18.07278-404.494905 18.07278-404.494906-448.652111 102.28821-480.139738 129.304221-1022.509462 129.304221-542.183406 0-1049.898108-129.304221-1049.898107-129.304221s46.765648 110.858806 14.346433 438.590975c-32.232897 327.918486-100.797671 438.777293-100.797671 438.777293s571.062591-92.413392 1208.454149-92.413392 1083.062591 92.413392 1083.062591 92.413392-93.717613-95.953421-150.730713-472.873362zM1847.708879 227.307132s54.777293-7.63901 131.353712-27.016011c79.371179-20.122271 131.353712-36.14556 131.353712-36.145561s-5.962154 19.004367-6.148472 79.371179c0 49.560408 1.490539 76.390102 1.490539 76.390102l-131.353712-16.768559-135.825328-17.327511 9.129549-58.503639z m-62.975255 240.908297l51.982533 53.100437-94.649199 10.43377 42.666666-63.534207z m-302.57933-170.294032s61.671033-6.148472 118.870451-17.886463c69.123726-14.346434 131.912664-34.282387 131.912664-34.282387l-6.148472 58.503639-252.832605 149.240175 8.197962-155.574964zM205.508006 140.296943l145.513828 55.336245s-38.195051 65.583697-57.75837 115.516739c-21.799127 55.708879-37.077147 147.935953-40.058224 151.6623l-58.503639-15.464338c26.643377-66.887918 23.475983-222.835517 10.806405-307.050946z m284.879185 664.221252s-27.947598 2.422125-151.103348 26.45706c-111.417758 21.799127-163.213974 39.68559-163.213974 39.685589l158.556041-478.649199 121.665211 12.296943s-54.96361 92.599709-107.13246 198.055313c-52.16885 105.641921-82.165939 185.199418-82.165939 185.199418l257.117904-113.839884-33.723435 130.79476z m-26.270743-315.621543l104.710335-147.749636-217.804949-21.612809 33.164483-110.858807s65.770015 26.084425 140.110626 45.088792c74.154294 19.004367 143.091703 27.388646 143.091703 27.388646l-109.368268 223.208152-93.90393-15.464338z m528.582242 293.263464s-21.426492-2.235808-68.005822-1.117903c-46.765648 1.117904-65.770015 3.353712-65.770015 3.353711l-32.419214-341.51965-83.097525-20.86754-13.9738 364.809315s-25.525473-0.931587-72.663755 4.098982c-59.80786 6.148472-88.31441 12.296943-88.314411 12.296943l145.700146-512.186318s66.515284 19.190684 113.839884 25.339156c71.359534 9.315866 117.007278 11.551674 117.007278 11.551674l-40.058225 368.908297 87.755459-39.312955v124.646288z m151.848617 6.893741s-8.570597-2.608443-35.772926-3.726346c-27.574964-1.117904-34.09607-0.931587-34.09607-0.931587l34.09607-459.83115s19.377001 0.372635 84.029112 0c40.803493-0.186317 95.394469-4.657933 95.394469-4.657933l-143.650655 469.147016z m207.930131 28.506551c-34.282387 0.372635-74.340611 3.726346-74.340611 3.726346V622.113537l29.997089-100.797671 118.497816 299.225619c0.186317-0.186317-32.978166-3.353712-74.154294-2.981077z m121.665211-259.353712l258.981077-198.614265v84.588064L1490.538574 717.135371l-16.395925-158.928675z m337.234352 275.749636c-100.052402-8.943231-245.56623-12.483261-245.56623-12.483261l170.48035-254.136826 123.528384-10.992722 220.972344 310.590975c-0.186317 0-169.362445-24.221252-269.414848-32.978166z m21.799127-416.791849l5.216885-81.420669 279.475983 109.368268s-0.745269 40.989811 18.631732 134.148471c19.190684 93.158661 52.355167 185.572052 52.355167 185.572053L1833.176128 417.164483z" fill="#d81e06" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)