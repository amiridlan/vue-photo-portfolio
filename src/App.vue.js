import { defineComponent, ref } from 'vue';
import Polaroid from './components/Polaroid.vue';
import Header from './components/Header.vue';
import Gallery from './components/Gallery.vue';
import imagesData from './data/images.json';
import polaroidData from './data/polaroid.json';
export default defineComponent({
    name: 'App',
    components: {
        Polaroid,
        Header,
        Gallery
    },
    setup() {
        const selectedGroup = ref(null);
        const selectedImages = ref([]);
        const selectedCaption = ref('');
        function handleSelectGallery(groupId) {
            selectedGroup.value = groupId;
            selectedImages.value = imagesData[groupId] || [];
            // Find caption from polaroidData by groupId
            const polaroidFigures = polaroidData;
            const matchedFigure = polaroidFigures.find(fig => fig.id === groupId);
            selectedCaption.value = matchedFigure ? matchedFigure.caption : '';
        }
        function handleBack() {
            selectedGroup.value = null;
            selectedImages.value = [];
            selectedCaption.value = '';
        }
        return {
            selectedGroup,
            selectedImages,
            selectedCaption,
            handleSelectGallery,
            handleBack
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Polaroid,
    Header,
    Gallery
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container mx-auto px-4 py-8 text-white" },
});
if (!__VLS_ctx.selectedGroup) {
    const __VLS_0 = {}.Header;
    /** @type {[typeof __VLS_components.Header, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
if (!__VLS_ctx.selectedGroup) {
    const __VLS_4 = {}.Polaroid;
    /** @type {[typeof __VLS_components.Polaroid, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        ...{ 'onSelectGallery': {} },
    }));
    const __VLS_6 = __VLS_5({
        ...{ 'onSelectGallery': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_8;
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = {
        onSelectGallery: (__VLS_ctx.handleSelectGallery)
    };
    var __VLS_7;
}
else {
    const __VLS_12 = {}.Gallery;
    /** @type {[typeof __VLS_components.Gallery, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ 'onBack': {} },
        images: (__VLS_ctx.selectedImages),
        galleryTitle: (__VLS_ctx.selectedCaption),
    }));
    const __VLS_14 = __VLS_13({
        ...{ 'onBack': {} },
        images: (__VLS_ctx.selectedImages),
        galleryTitle: (__VLS_ctx.selectedCaption),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_16;
    let __VLS_17;
    let __VLS_18;
    const __VLS_19 = {
        onBack: (__VLS_ctx.handleBack)
    };
    var __VLS_15;
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
var __VLS_dollars;
let __VLS_self;
