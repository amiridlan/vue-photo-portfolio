import { defineComponent, ref, onMounted, watch } from 'vue';
import { Icon } from '@iconify/vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import { getCloudinaryUrl } from '../config/cloudinary';
export default defineComponent({
    name: 'Gallery',
    components: {
        Icon,
        VueEasyLightbox
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
        const orientations = ref([]);
        const showLightbox = (idx) => {
            index.value = idx;
            visible.value = true;
        };
        // Async function to determine image orientation
        const checkOrientation = (url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    resolve(img.height > img.width ? 'vertical' : 'horizontal');
                };
                img.src = url;
            });
        };
        // Initialize orientations array
        const updateOrientations = async () => {
            const results = await Promise.all(props.images.map((img) => checkOrientation(getCloudinaryUrl(img.thumbnail))));
            orientations.value = results;
        };
        onMounted(() => {
            updateOrientations();
        });
        watch(() => props.images, () => {
            updateOrientations();
        });
        return { visible, index, showLightbox, orientations, getCloudinaryUrl };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Icon,
    VueEasyLightbox
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pt-24" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center mb-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('back');
        } },
    ...{ class: "px-4 py-2 bg-white hover:bg-gray-200 text-black font-bold rounded" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "flex-grow text-center text-4xl font-bold text-white" },
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
        ...{ class: (['relative group cursor-pointer shadow-md overflow-hidden',
                __VLS_ctx.orientations[idx] === 'vertical' ? 'w-90 h-130' : 'w-140 h-130']) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.getCloudinaryUrl(image.thumbnail)),
        alt: (image.title),
        loading: (idx >= 3 ? 'lazy' : 'eager'),
        ...{ class: "w-full h-full object-cover transition-transform group-hover:scale-105" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" },
    });
    const __VLS_0 = {}.Icon;
    /** @type {[typeof __VLS_components.Icon, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        icon: "mdi:magnify-plus-outline",
        ...{ class: "text-white text-4xl" },
    }));
    const __VLS_2 = __VLS_1({
        icon: "mdi:magnify-plus-outline",
        ...{ class: "text-white text-4xl" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
const __VLS_4 = {}.VueEasyLightbox;
/** @type {[typeof __VLS_components.VueEasyLightbox, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.visible),
    imgs: (__VLS_ctx.images.map(img => img.thumbnail)),
    index: (__VLS_ctx.index),
}));
const __VLS_6 = __VLS_5({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.visible),
    imgs: (__VLS_ctx.images.map(img => img.thumbnail)),
    index: (__VLS_ctx.index),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onHide: (...[$event]) => {
        __VLS_ctx.visible = false;
    }
};
var __VLS_7;
/** @type {__VLS_StyleScopedClasses['pt-24']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
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
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
var __VLS_dollars;
let __VLS_self;
