import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Button',
    emits: ['click'],
    setup(_, { emit }) {
        const onClick = (event) => {
            emit('click', event);
        };
        return { onClick };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.onClick) },
    ...{ class: "px-4 py-2 bg-[#36312d] text-[#f3ebdd] hover:bg-[#9f5731] font-semibold rounded" },
});
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#36312d]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#f3ebdd]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-[#9f5731]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
let __VLS_self;
