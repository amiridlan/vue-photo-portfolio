import { defineComponent } from 'vue';
import figures from '../data/polaroid.json';
export default defineComponent({
    name: 'Polaroid',
    emits: ['selectGallery'],
    data() {
        return {
            figures
        };
    },
    methods: {
        handleClick(id) {
            this.$emit('selectGallery', id);
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
    ...{ class: "mx-auto" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.figures))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleClick(item.id);
            } },
        key: (index),
        ...{ style: ({ transform: index % 2 === 0 ? 'rotate(5deg)' : 'rotate(-5deg)' }) },
        ...{ class: "float-left relative bg-white text-center text-black text-lg p-2.5 m-2.5 mb-8 ml-12 shadow-sm transition-transform duration-300 hover:shadow-[5px_10px_100px_black] hover:scale-110 hover:z-20 cursor-pointer" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "aspect-w-4 aspect-h-3" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (item.src),
        loading: (index >= 3 ? 'lazy' : 'eager'),
        ...{ class: "object-cover w-full h-70" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.figcaption, __VLS_intrinsicElements.figcaption)({});
    (item.caption);
}
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['float-left']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['m-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-12']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-[5px_10px_100px_black]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-110']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:z-20']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['aspect-w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['aspect-h-3']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-70']} */ ;
var __VLS_dollars;
let __VLS_self;
