<script setup lang="ts">
import { armMedals, headMedals, LegMedals } from '@/utils/data/ooo/medals'

const headMedalName = ref('？')
const armMedalName = ref('？')
const legMedalName = ref('？')

const selectMedals = () => {
  headMedalName.value = pickMedal(headMedals)
  armMedalName.value = pickMedal(armMedals)
  legMedalName.value = pickMedal(LegMedals)
}

const pickMedal = (medals: string[]): string => {
  const randomIndex = Math.floor(Math.random() * medals.length)
  return medals[randomIndex] ?? '？'
}
</script>

<template>
  <article>
    <h2>オーズ</h2>
    <section class="selector">
      <div class="medals">
        <div class="head">{{ headMedalName }}</div>
        <div class="arm">{{ armMedalName }}</div>
        <div class="leg">{{ legMedalName }}</div>
      </div>
      <!-- そのうちこのあたりにフォーム名を出す -->
      <vBtn @click="selectMedals">ランダム</vBtn>
    </section>
    <section class="options">
      <!--
        搭載するオプション
        - 使用するアイテム（チェックボックス）
          - テレビ本編登場済みコアメダル
            - タジャドル
            - ガタキリバ
            - ラトラーター
            - サゴーゾ
            - シャウタ
            - プトティラ（紫のコアメダル）
          - DX対応コアメダル
            - 爬虫類系
            - ヤドカリメダル
            - カンガルーメダル
            - パンダメダル
            - 節足動物系（黒）
          - イマジンメダル
          - ショッカーメダル
          - ひび割れたタカメダル
          - 未来のコアメダル（CSM限定）
            - スーパータトバ
            - サラミウオ
            - シガゼシ
            - ムカチリ
            - セイシロギン
            - ビカソ
          - ver.10th
            - タジャドルコンボエタニティ
            - ゴーダメダル
        - プトティラの亜種形態を許可する
        - ver.10thの亜種形態を許可する
        - 正しくない位置にコアメダルを使用することを許可する

      -->
      <!-- <h2>設定</h2>
      <div class="tv-medals">
        <h3>テレビ本編登場済みコアメダル</h3>
        <vCheckbox label="タジャドル" density="comfortable" hide-details />
        <vCheckbox label="ガタキリバ" density="comfortable" hide-details />
        <vCheckbox label="ラトラーター" density="comfortable" hide-details />
        <vCheckbox label="サゴーゾ" density="comfortable" hide-details />
        <vCheckbox label="シャウタ" density="comfortable" hide-details />
        <vCheckbox label="プトティラ（紫のコアメダル）" density="comfortable" hide-details />
      </div>
      <div class="dx-medals">
        <h3>DX対応コアメダル</h3>
        <vCheckbox label="爬虫類系" density="comfortable" hide-details />
        <vCheckbox label="ヤドカリメダル" density="comfortable" hide-details />
        <vCheckbox label="カンガルーメダル" density="comfortable" hide-details />
        <vCheckbox label="パンダメダル" density="comfortable" hide-details />
        <vCheckbox label="節足動物系（黒）" density="comfortable" hide-details />
      </div> -->
    </section>
  </article>
</template>

<style scoped>
.selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.medals {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
</style>
