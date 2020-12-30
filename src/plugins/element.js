import Vue from 'vue'
import {
  Button,
  Container,
  Aside,
  Main,
  Header,
  Row,
  Col,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  TabPane,
  Tabs,
  Card,
  Select,
  Form,
  FormItem,
  Option,
  Input,
  DatePicker,
  TimePicker,
  Table,
  TableColumn,
  PageHeader,
  Pagination,
  Dialog,
  MessageBox,
  Message,
  TimeSelect,
  Upload,
  OptionGroup,
  Transfer,
  Radio,
  RadioGroup,
  Collapse,
  CollapseItem,
  Checkbox,
  Divider,
  Image,
  Avatar,
  Autocomplete,
  Tree,
  Dropdown,
  DropdownItem,
  DropdownMenu
} from 'element-ui'

Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Tree)
Vue.use(Autocomplete)
Vue.use(Avatar)
Vue.use(Image)
Vue.use(Divider)
Vue.use(Checkbox)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Transfer)
Vue.use(Upload)
Vue.use(OptionGroup)
Vue.use(TimeSelect)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(PageHeader)
Vue.use(TableColumn)
Vue.use(TimePicker)
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Input)
Vue.use(Select)
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Card)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
