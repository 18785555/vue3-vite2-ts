<script setup lang="ts">
import { computed, ref, watchEffect, onUnmounted } from "vue";

export type VModalSize = "small" | "medium" | "large" | "big" | "full";
export type VModalAction = "center" | "right";

export interface VModalEmits {
  (e: "close"): void;
}
export interface VModalProps {
  title: string;
  size?: VModalSize;
  actions?: VModalAction;
  open?: boolean;
  rounded?: boolean;
  noscroll?: boolean;
  noclose?: boolean;
  tabs?: boolean;
  cancelLabel?: string;
}

const emit = defineEmits<VModalEmits>();
const props = withDefaults(defineProps<VModalProps>(), {
  size: undefined,
  actions: undefined,
  cancelLabel: undefined,
});

const wasOpen = ref(false);
const cancelLabel = computed(() => props.cancelLabel || "取消");

const checkScroll = () => {
  if (props.noscroll && props.open) {
    document.documentElement.classList.add("no-scroll");
    wasOpen.value = true;
  } else if (wasOpen.value && props.noscroll && !props.open) {
    document.documentElement.classList.remove("no-scroll");
    wasOpen.value = false;
  }
};

watchEffect(checkScroll);
onUnmounted(() => {
  document.documentElement.classList.remove("no-scroll");
});
</script>

<template>
  <Teleport to="body">
    <div
      :class="[open && 'is-active', size && `is-${size}`]"
      class="modal v-modal"
    >
      <div
        class="modal-background v-modal-close"
        tabindex="0"
        @click="() => noclose === false && emit('close')"
      ></div>
      <div class="modal-content">
        <div class="modal-card">
          <header class="modal-card-head">
            <h3>{{ title }}</h3>
          </header>
          <div class="modal-card-body" :class="[props.tabs && 'has-tabs']">
            <div class="inner-content">
              <slot name="content"></slot>
            </div>
          </div>
          <div
            class="modal-card-foot is-centered"
            :class="[
              actions === 'center' && 'is-centered',
              actions === 'right' && 'is-end',
            ]"
          >
            <slot name="cancel" :close="() => emit('close')">
              <a
                tabindex="0"
                class="button v-button v-modal-close"
                :class="[rounded && 'is-rounded']"
                @keydown.space.prevent="emit('close')"
                @click="emit('close')"
              >
                {{ cancelLabel }}
              </a>
            </slot>
            <slot name="action" :close="() => emit('close')"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
