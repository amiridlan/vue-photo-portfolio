import { defineComponent } from 'vue';
import figures from '../data/polaroid.json';
export default defineComponent({
    name: 'Polaroid',
    emits: ['selectGallery'],
    data() {
        return {
            figures,
            loading: figures.map(() => true)
        };
    },
    methods: {
        handleClick(id) {
            this.$emit('selectGallery', id);
        },
        handleImageLoad(index) {
            this.loading[index] = false;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "background",
    ...{ class: "pt-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "polaroid",
    ...{ class: "\u006d\u0078\u002d\u0061\u0075\u0074\u006f\u0020\u0077\u002d\u0078\u0073\u0020\u0068\u002d\u0078\u0073\u0020\u006d\u0064\u003a\u0077\u002d\u006c\u0067\u0020\u006d\u0064\u003a\u0068\u002d\u006c\u0067\u0020\u006c\u0067\u003a\u0077\u002d\u0036\u0078\u006c\u0020\u006c\u0067\u003a\u0068\u002d\u0036\u0078\u006c\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0067\u0072\u0069\u0064\u0020\u0067\u0061\u0070\u002d\u0034\u0020\u0067\u0072\u0069\u0064\u002d\u0063\u006f\u006c\u0073\u002d\u0031\u0020\u006d\u0064\u003a\u0067\u0072\u0069\u0064\u002d\u0063\u006f\u006c\u0073\u002d\u0032\u0020\u006c\u0067\u003a\u0067\u0072\u0069\u0064\u002d\u0063\u006f\u006c\u0073\u002d\u0034" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.figures))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleClick(item.id);
            } },
        key: (index),
        ...{ class: "relative bg-[#F4F3F2] text-center text-lg p-2.5 shadow-sm transition-transform duration-300 hover:text-[#9f5731] hover:shadow-[5px_10px_100px_black] hover:scale-110 hover:z-20 cursor-pointer" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "relative" },
    });
    if (__VLS_ctx.loading[index]) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "absolute inset-0 bg-gray-300 animate-pulse" },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ onLoad: (...[$event]) => {
                __VLS_ctx.handleImageLoad(index);
            } },
        src: (item.src),
        loading: (index >= 3 ? 'lazy' : 'eager'),
        ...{ class: "object-cover w-full h-full" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.figcaption, __VLS_intrinsicElements.figcaption)({
        ...{ class: "mt-2" },
    });
    (item.caption);
}
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['h-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['md:h-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-6xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:h-6xl']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#F4F3F2]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-[#9f5731]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-[5px_10px_100px_black]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-110']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:z-20']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-pulse']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
var __VLS_dollars;
let __VLS_self;
