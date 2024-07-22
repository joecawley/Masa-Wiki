<template>
  <div class="tooltip-container">
    <span
      class="tooltip-text"
      @mouseover="showTooltip = true"
      @mouseleave="scheduleHideTooltip"
    >
      {{ text }}
    </span>
    <transition name="tooltip-fade">
      <div
        v-if="showTooltip"
        :class="['tooltip-popup', { 'has-link': link }]"
        @mouseover="cancelHideTooltip"
        @mouseleave="scheduleHideTooltip"
        @click="handleClick"
      >
        <span v-html="formattedTooltip"></span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      showTooltip: false,
      hideTimeout: null
    };
  },
  computed: {
    formattedTooltip() {
      if (this.link) {
        return `${this.tooltip}<span style="color:var(--vp-c-brand-1)"> ↗</span>`;
      } else {
        return this.tooltip;
      }
    }
  },
  methods: {
    handleClick() {
      if (this.link) {
        window.open(this.link, '_blank');
      }
    },
    scheduleHideTooltip() {
      this.hideTimeout = setTimeout(() => {
        this.showTooltip = false;
      }, 300); // 300 milliseconds delay
    },
    cancelHideTooltip() {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
};
</script>

<style scoped>
.tooltip-container {
  display: inline-block;
  position: relative;
}

.tooltip-text {
  text-decoration: underline;
}

.tooltip-popup {
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: opacity 0.3s ease;
}

.tooltip-popup::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #333 transparent;
}

.tooltip-fade-enter-active, .tooltip-fade-leave-active {
  transition: opacity 0.3s ease;
}

.tooltip-fade-enter-from, .tooltip-fade-leave-to {
  opacity: 0;
}

.has-link {
  cursor: pointer;
  color: cornflowerblue;
}

</style>
