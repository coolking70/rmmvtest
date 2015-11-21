//=============================================================================
// ChineseSimplifiedSupport.js
//=============================================================================
 
/*:
 * @plugindesc Support Chinese Simplified.ver1.0
 * @author woodey
 * 
 * @param UseFont
 * @desc UseFont Name.
 * default: SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 */

var parameter = PluginManager.parameters('ChineseSimplifiedFont')
var useFont = parameter['UseFont'];

Scene_Boot.prototype.isGameFontLoaded = function() {
    if (Graphics.isFontLoaded(useFont)) {
        return true;
    } else {
        var elapsed = Date.now() - this._startDate;
        if (elapsed >= 20000) {
            throw new Error('Failed to load '+useFont);
        }
    }
};

Window_Base.prototype.standardFontFace = function() {
		return useFont;
    }