import { defineComponent, ref } from 'vue';
import { Icon } from '@iconify/vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import { HalfCircleSpinner } from 'epic-spinners';
import Button from './Button.vue';
export default defineComponent({
    name: 'Gallery',
    components: {
        Icon,
        VueEasyLightbox,
        HalfCircleSpinner,
        Button
    },
    props: {
        images: {
            type: Array,
            required: true
        },
        galleryTitle: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const visible = ref(false);
        const index = ref(0);
        // Track loading state of images
        const loadingStates = ref(props.images.map(() => true));
        const showLightbox = (idx) => {
            index.value = idx;
            visible.value = true;
        };
        // Mark image as loaded
        const onImageLoad = (idx) => {
            loadingStates.value[idx] = false;
        };
        return { visible, index, showLightbox, loadingStates, onImageLoad };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Icon,
    VueEasyLightbox,
    HalfCircleSpinner,
    Button
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pt-24" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center mb-4 relative flex-col sm:flex-row sm:items-center" },
});
const __VLS_0 = {}.Button;
/** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    ...{ class: "self-center sm:self-auto sm:mb-0" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    ...{ class: "self-center sm:self-auto sm:mb-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (...[$event]) => {
        __VLS_ctx.$emit('back');
    }
};
__VLS_3.slots.default;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-3xl sm:text-4xl font-bold text-center sm:absolute sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-auto" },
});
(__VLS_ctx.galleryTitle);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-wrap gap-4 p-4 justify-center" },
});
for (const [image, idx] of __VLS_getVForSourceType((__VLS_ctx.images))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.showLightbox(idx);
            } },
        key: (image.id),
        ...{ class: "relative group cursor-pointer shadow-md overflow-hidden w-sm aspect-[4/5]" },
    });
    if (__VLS_ctx.loadingStates[idx]) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "absolute inset-0 flex items-center justify-center bg-[#36312d]" },
        });
        const __VLS_8 = {}.HalfCircleSpinner;
        /** @type {[typeof __VLS_components.HalfCircleSpinner, typeof __VLS_components.halfCircleSpinner, ]} */ ;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
            animationDuration: (1000),
            size: (40),
            color: "#9f5731",
        }));
        const __VLS_10 = __VLS_9({
            animationDuration: (1000),
            size: (40),
            color: "#9f5731",
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ onLoad: (...[$event]) => {
                __VLS_ctx.onImageLoad(idx);
            } },
        src: (image.thumbnail),
        alt: (image.title),
        loading: (idx >= 3 ? 'lazy' : 'eager'),
        ...{ class: (['w-full h-full object-cover transition-transform group-hover:scale-105', __VLS_ctx.loadingStates[idx] ? 'opacity-0' : 'opacity-100']) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center" },
    });
    const __VLS_12 = {}.Icon;
    /** @type {[typeof __VLS_components.Icon, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        icon: "mdi:magnify-plus-outline",
        ...{ class: "text-white text-4xl" },
    }));
    const __VLS_14 = __VLS_13({
        icon: "mdi:magnify-plus-outline",
        ...{ class: "text-white text-4xl" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
const __VLS_16 = {}.VueEasyLightbox;
/** @type {[typeof __VLS_components.VueEasyLightbox, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.visible),
    imgs: (__VLS_ctx.images.map(img => img.thumbnail)),
    index: (__VLS_ctx.index),
}));
const __VLS_18 = __VLS_17({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.visible),
    imgs: (__VLS_ctx.images.map(img => img.thumbnail)),
    index: (__VLS_ctx.index),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_20;
let __VLS_21;
let __VLS_22;
const __VLS_23 = {
    onHide: (...[$event]) => {
        __VLS_ctx.visible = false;
    }
};
var __VLS_19;
/** @type {__VLS_StyleScopedClasses['pt-24']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['self-center']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:self-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:transform']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['aspect-[4/5]']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#36312d]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-30']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-80']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
var __VLS_dollars;
let __VLS_self;
