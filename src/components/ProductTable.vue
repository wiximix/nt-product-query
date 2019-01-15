<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      输入产品编号，返回 产品名称、规格等数据
    </p>
    <el-autocomplete class="inline-input"
                     v-model="state1"
                     :fetch-suggestions="querySearch"
                     placeholder="请输入内容"
                     @select="handleSelect">
      <template slot-scope="{ item }">
        <div class="name">{{ item['产品编号'] }}</div>
        <span class="addr">{{ item['产品名称'] }}</span>
      </template></el-autocomplete>
    <el-form label-position="left"
             inline
             class="demo-table-expand">
      <el-form-item label="产品名称">
        <span>{{ product['产品名称'] }}</span>
      </el-form-item>

      <el-form-item label="产品编号">
        <span>{{ product['产品编号'] }}</span>
      </el-form-item>
      <el-form-item label="采购名称">
        <span>{{ product['采购名称'] }}</span>
      </el-form-item>
      <el-form-item label="规格宽">
        <span>{{ product['规格宽'] }}</span>
      </el-form-item>
      <el-form-item label="规格长">
        <span>{{ product['规格长'] }}</span>
      </el-form-item>
    </el-form>
    <!-- <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left"
                   inline
                   class="demo-table-expand">
            <el-form-item label="产品名称">
              <span>{{ props.row['产品名称'] }}</span>
            </el-form-item>

            <el-form-item label="产品编号">
              <span>{{ props.row['产品编号'] }}</span>
            </el-form-item>
            <el-form-item label="采购名称">
              <span>{{ props.row['采购名称'] }}</span>
            </el-form-item>
            <el-form-item label="规格宽">
              <span>{{ props.row['规格宽'] }}</span>
            </el-form-item>
            <el-form-item label="规格长">
              <span>{{ props.row['规格长'] }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="产品名称"
                       label="产品名称"
                       fixed>
      </el-table-column>
      <el-table-column prop="产品编号"
                       label="产品编号"
                       width="180">
      </el-table-column>

    </el-table> -->
  </div>
</template>

<script>
import productData from './product.json'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      product:{},
      tableData: [],
      state1: '',
    }
  },
  mounted() {
    this.products = this.loadAll()
  },
  methods: {
    querySearch(queryString, cb) {
      let products = this.products
      let results = queryString
        ? products.filter(this.createFilter(queryString))
        : products
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return product => {
        return (
          product['产品编号']
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    loadAll() {
      return productData.data
    },
    handleSelect(item) {
      // console.log(item)
      if (item) {
        this.product = item
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.addr {
  font-size: 12px;
  color: #b4b4b4;
}

.highlighted .addr {
  color: #ddd;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 7px;
}
a {
  color: #42b983;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
