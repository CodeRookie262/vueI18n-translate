<template>
  <div class="dashboard-serving">
    <div class="dashboard-title">
      <span><i class="iconfont icon-shuju1"/>{{$t('你好呀')}}</span>
    </div>
    <div class="dashboard-data">
      <data-summarization
        :data="overview"
        :prop="summaryProp"
      ></data-summarization>
    </div>
    <div class="dashboard-title">
      <span><i class="iconfont icon-meirishuju"/>{{$t('不好')}}</span>
    </div>
    <div class="dashboard-chart">
      <qd-charts :list="chartList"></qd-charts>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Delivery',
  props: {
    overview: {
      chartType: Array,
      default: () => [
        //       {
        //         key: '开答量',
        //         value: 1
        //       },
        //       {
        //         key: '有效样本量',
        //         value: 1
        //       },
        //       {
        //         key: '完答率',
        //         value: 1
        //       },
        //       {
        //         key: '完答率',
        //         value: '100%'
        //       },
        //       {
        //         key: '开答率',
        //         value: '100%'
        //       }
      ]
    },
    chartList: {
      chartType: [Object, Array],
      default: () => [
        //     {
        //       chartType: 1,
        //       questionLabel: '单选题',
        //       title: '每日获得有效样本量',
        //       labelMap: {
        //         sample_size: '每日增加的有效样本'
        //       },
        //       columns: ['date', 'sample_size'],
        //       rows: [
        //         { date: '3月6日', sample_size: 1393 },
        //         { date: '3月7日', sample_size: 3530 },
        //         { date: '3月8日', sample_size: 2923 },
        //         { date: '3月9日', sample_size: 1723 },
        //         { date: '3月10日', sample_size: 3792 },
        //         { date: '3月11日', sample_size: 4593 }
        //       ]
        //     },
        //     {
        //       chartType: 5,
        //       questionLabel: '单选题',
        //       title: '每日开答率、完答率',
        //       labelMap: {
        //         start_rate: '开答率',
        //         end_rate: '完答率'
        //       },
        //       columns: ['date', 'start_rate', 'end_rate'],
        //       rows: [
        //         { date: '3月6日', start_rate: 0.1, end_rate: 0.26 },
        //         { date: '3月7日', start_rate: 0.23, end_rate: 0.43 },
        //         { date: '3月8日', start_rate: 0.42, end_rate: 0.52 },
        //         { date: '3月9日', start_rate: 0.23, end_rate: 0.35 },
        //         { date: '3月10日', start_rate: 0.15, end_rate: 0.23 },
        //         { date: '3月11日', start_rate: 0.12, end_rate: 0.24 }
        //       ]
        //     },
        //     {
        //       chartType: 1,
        //       title: '每日获得有效样本量2',
        //       questionLabel: '单选题',
        //       labelMap: {
        //         sample_size: '每日增加的有效样本'
        //       },
        //       columns: ['date', 'sample_size'],
        //       rows: [
        //         { date: '3月6日', sample_size: 1393 },
        //         { date: '3月7日', sample_size: 3530 },
        //         { date: '3月8日', sample_size: 2923 },
        //         { date: '3月9日', sample_size: 1723 },
        //         { date: '3月10日', sample_size: 3792 },
        //         { date: '3月11日', sample_size: 4593 }
        //       ]
        //     },
        //     {
        //       chartType: 3,
        //       questionLabel: '单选题',
        //       title: '每日完答量、开答量、问卷访问量',
        //       labelMap: {
        //         visit_num: '问卷访问量',
        //         start_num: '开答量',
        //         end_num: '完答量'
        //       },
        //       columns: ['date', 'visit_num', 'start_num', 'end_num'],
        //       rows: [
        //         { date: '3月6日', visit_num: 200, start_num: 222, end_num: 460 },
        //         { date: '3月7日', visit_num: 451, start_num: 300, end_num: 855 },
        //         { date: '3月8日', visit_num: 540, start_num: 322, end_num: 352 },
        //         { date: '3月9日', visit_num: 345, start_num: 545, end_num: 650 },
        //         { date: '3月10日', visit_num: 1111, start_num: 242, end_num: 460 },
        //         { date: '3月11日', visit_num: 222, start_num: 242, end_num: 360 }
        //       ]
        //     },
        //     {
        //       chartType: 9,
        //       title: '每日用户触达数',
        //       questionLabel: '单选题',
        //       labelMap: {
        //         test1: '绿色健康',
        //         test2: '呵护睡眠',
        //         test3: '天竺棉',
        //         test4: '天然亚麻织物',
        //         test5: '具有高透气性'
        //       // test1_2: "绿色健康",
        //       // test2_2: "呵护睡眠",
        //       // test3_2: "天竺棉",
        //       // test4_2: "天然亚麻织物",
        //       // test5_2: "具有高透气性",
        //       },
        //       columns: [
        //         'chartType',
        //         'test1',
        //         // "test1_2",
        //         'test2',
        //         // "test2_2",
        //         'test3',
        //         // "test3_2",
        //         'test4',
        //         // "test4_2",
        //         'test5'
        //         // "test5_2"
        //       ],
        //       rows: [
        //         {
        //           chartType: '竹节纯棉',
        //           test1: 920,
        //           test2: 710,
        //           test3: 510,
        //           test4: 310,
        //           test5: 220
        //         },
        //         {
        //           chartType: '蜂窝网巢',
        //           test1: 925,
        //           test2: 730,
        //           test3: 530,
        //           test4: 330,
        //           test5: 230
        //         },
        //         {
        //           chartType: '汉方本草',
        //           test1: 943,
        //           test2: 790,
        //           test3: 590,
        //           test4: 390,
        //           test5: 290
        //         },
        //         {
        //           chartType: '御用贡缎',
        //           test1: 934,
        //           test2: 734,
        //           test3: 534,
        //           test4: 354,
        //           test5: 234
        //         },
        //         {
        //           chartType: '进口超柔螺纹',
        //           test1: 901,
        //           test2: 701,
        //           test3: 591,
        //           test4: 301,
        //           test5: 201
        //         },
        //         {
        //           chartType: '超耐洗纯棉',
        //           test1: 832,
        //           test2: 732,
        //           test3: 584,
        //           test4: 312,
        //           test5: 232
        //         },
        //         {
        //           chartType: '天壤树脂纯棉',
        //           test1: 820,
        //           test2: 720,
        //           test3: 520,
        //           test4: 350,
        //           test5: 220
        //         }

        //       ]
        //     },
        //     {
        //       chartType: 6,
        //       title: '问题1-1.     对于以下这款最新春夏家居服，您的购买意愿是',
        //       questionLabel: '多选题',
        //       labelMap: {
        //         rate: '每日用户触达数'
        //       },
        //       columns: ['chartType', 'rate'],
        //       rows: [
        //         { chartType: '你一定会买', rate: 0.1072 },
        //         { chartType: '很可能会购买', rate: 0.2088 },
        //         { chartType: '可能买也可能不买', rate: 0.3901 },
        //         { chartType: '很可能不买', rate: 0.2194 },
        //         { chartType: '肯定不会买', rate: 0.0745 }
        //       ]
        //     },
        //     {
        //       chartType: '10',
        //       title: '会关注哪些母婴类KOL账号呢？',
        //       questionLabel: '开放题',
        //       labelMap: {
        //       },
        //       columns: ['word', 'count'],
        //       rows: [
        //         {
        //           word: '朋友',
        //           count: 22199
        //         },
        //         {
        //           word: '奶粉',
        //           count: 10288
        //         },
        //         {
        //           word: '宝宝',
        //           count: 620
        //         },
        //         {
        //           word: '推荐',
        //           count: 274470
        //         },
        //         {
        //           word: '孩子',
        //           count: 12311
        //         },
        //         {
        //           word: '身边',
        //           count: 1206
        //         },
        //         {
        //           word: '吸收',
        //           count: 4885
        //         },
        //         {
        //           word: '比较',
        //           count: 32294
        //         },
        //         {
        //           word: '性价比',
        //           count: 18574
        //         },
        //         {
        //           word: '值得',
        //           count: 38929
        //         },
        //         {
        //           word: '配方',
        //           count: 969
        //         },
        //         {
        //           word: '营养',
        //           count: 37517
        //         },
        //         {
        //           word: '介绍',
        //           count: 12053
        //         },
        //         {
        //           word: '均衡',
        //           count: 57299
        //         },
        //         {
        //           word: '丰富',
        //           count: 15418
        //         },
        //         {
        //           word: '使用',
        //           count: 22905
        //         },
        //         {
        //           word: '肠胃',
        //           count: 5146
        //         },
        //         {
        //           word: '丰富',
        //           count: 49487
        //         },
        //         {
        //           word: '实惠',
        //           count: 33837
        //         },
        //         {
        //           word: '一直',
        //           count: 4500
        //         },
        //         {
        //           word: '了解',
        //           count: 5744
        //         },
        //         {
        //           word: '进口',
        //           count: 4840
        //         },
        //         {
        //           word: '品质',
        //           count: 232
        //         },
        //         {
        //           word: '口碑',
        //           count: 3706
        //         },
        //         {
        //           word: '投诉',
        //           count: 4812
        //         },
        //         {
        //           word: '诉说',
        //           count: 16578
        //         },
        //         {
        //           word: '适合',
        //           count: 76970
        //         },
        //         {
        //           word: '放心',
        //           count: 6704
        //         },
        //         {
        //           word: '母乳',
        //           count: 15964
        //         },
        //         {
        //           word: '广告',
        //           count: 60679
        //         },
        //         {
        //           word: '一直',
        //           count: 24347
        //         },
        //         {
        //           word: '上火',
        //           count: 43420
        //         },
        //         {
        //           word: '便秘',
        //           count: 25222
        //         },
        //         {
        //           word: '购买',
        //           count: 16904
        //         },
        //         {
        //           word: '品质',
        //           count: 4029
        //         }
        //       ]
        //     }
      ]
    }
  },
  computed: {
    ...mapState({
      crowdList: state => state.DataCenter.crowdList || []
    })
  },
  data () {
    return {
      summaryProp: {
        label: 'key',
        value: 'value'
      }
      // overview: [],
      // chartList: []
    }
  },
  methods: {
    test () {
      this.$refs.qdBar.rerenderChart()
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
@import url("~assets/less/variable.less");

.dashboard {
  &-title {
    display: flex;
    height: 36px;
    align-items: center;
    margin-left: 8px;
    span {
      font-size: 14px;
      color: #303133;
      line-height: 1.43;
    }
    i{
      color: #FFCE4D;
      background: #fff;
      border-radius: 50%;
      margin-right: 4px;
      font-size: 16px;
    }
  }
  &-data {
   // margin-bottom: 24px;
  }
  &-chart {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
  //  margin-top: 24px;
    width: 100%;
  }
}
</style>
