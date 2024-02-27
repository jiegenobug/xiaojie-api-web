// 创建组合式api仓库
import { defineStore } from "pinia"
import { computed, ref, type Ref, type ComputedRef } from "vue";

// 创建 & 导出仓库
export const useLoadingStore = defineStore('loadingStore', () => {
  const showLoading: Ref<boolean> = ref(false);
  let isLoading: ComputedRef<boolean> = computed(() => showLoading.value)
  function changeLoading(isLoading: boolean) {
    console.log(1);
    showLoading.value = !isLoading;
  }
  return { showLoading, changeLoading, isLoading }
})