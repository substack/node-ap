var exports = module.exports = ap;

exports.ap = exports;
exports.pa = pa;
exports.apa = apa;
// Don't break backwards compat. Curry should be deprecated
exports.partial = exports.curry = partial;
exports.partialRight = partialRight;
exports.curried = curried;
exports.curriedRight = curriedRight;

function ap(args, fn) {
    return function () {
        return fn.apply(this, args.concat.apply(args, arguments));
    };
}

function pa(args, fn) {
    return function () {
        return fn.apply(this, [].slice.call(arguments).concat(args));
    };
}

function apa(left, right, fn) {
    return function () {
        return fn.apply(this,
            left.concat.apply(left, arguments).concat(right)
        );
    };
}

function partial(fn) {
    var args = [].slice.call(arguments, 1);
    return ap(args, fn);
}

function partialRight(fn) {
    var args = [].slice.call(arguments, 1);
    return pa(args, fn);
}

function curried(fn) {
    return partial(partial, fn);
}

function curriedRight(fn) {
    return partial(partialRight, fn);
}