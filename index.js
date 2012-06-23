var exports = module.exports = function (args, fn) {
    return function () {
        return fn.apply(this, args.concat.apply(args, arguments));
    };
};

exports.ap = exports;

exports.pa = function (args, fn) {
    return function () {
        return fn.apply(this, [].slice.call(arguments).concat(args));
    };
};

exports.apa = function (left, right, fn) {
    return function () {
        return fn.apply(this,
            left.concat.apply(left, arguments).concat(right)
        );
    };
};

exports.curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    return exports.ap(args, fn);
};

exports.curryRight = function (fn) {
    var args = [].slice.call(arguments, 1);
    return exports.pa(args, fn);
};