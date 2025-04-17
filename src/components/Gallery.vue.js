import { defineComponent, ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import VueEasyLightbox from 'vue-easy-lightbox';
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
        onMounted(async () => {
            const results = await Promise.all(props.images.map(img => checkOrientation(img.thumbnail)));
            orientations.value = results;
        });
        return { visible, index, showLightbox, orientations };
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
    ...{ class: "flex flex-wrap gap-4 p-4 justify-center" },
});
for (const [image, idx] of __VLS_getVForSourceType((__VLS_ctx.images))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.showLightbox(idx);
            } },
        key: (image.id),
        ...{ class: (['relative group cursor-pointer rounded-lg shadow-md overflow-hidden',
                __VLS_ctx.orientations[idx] === 'vertical' ? 'w-52 h-58' : 'w-78 h-58']) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: (image.thumbnail),
        alt: (image.title),
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
    imgs: (__VLS_ctx.images.map(img => img.full)),
    index: (__VLS_ctx.index),
}));
const __VLS_6 = __VLS_5({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.visible),
    imgs: (__VLS_ctx.images.map(img => img.full)),
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
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
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
