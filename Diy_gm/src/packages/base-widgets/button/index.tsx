import { Button } from 'vant';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp,
  createEditorSelectProp,
  createEditorSwitchProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'button',
  moduleName: 'baseWidgets',
  label: 'ปุ่ม',
  preview: () => <Button type={'primary'}>ปุ่ม</Button>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();

    return () => (
      <div style={styles}>
        <Button ref={(el) => registerRef(el, block._vid)} {...props}></Button>
      </div>
    );
  },
  resize: {
    height: true,
    width: true,
  },
  events: [
    { label: 'คลิกปุ่ม，ทริกเกอร์เมื่อสถานะของปุ่มไม่ได้โหลดหรือปิดใช้งาน', value: 'click' },
    { label: 'ยิงเมื่อคุณเริ่มสัมผัสปุ่ม', value: 'touchstart' },
  ],
  props: {
    text: createEditorInputProp({ label: 'ข้อความปุ่ม', defaultValue: 'ปุ่ม' }),
    type: createEditorSelectProp({
      label: 'ประเภทปุ่ม',
      options: [
        {
          label: 'ปุ่มหลัก',
          value: 'primary',
        },
        {
          label: 'ปุ่มสำเร็จ',
          value: 'success',
        },
        {
          label: 'ปุ่มเริ่มต้น',
          value: 'default',
        },
        {
          label: 'ปุ่มเตือน',
          value: 'warning',
        },
        {
          label: 'ปุ่มอันตราย',
          value: 'danger',
        },
      ],
      defaultValue: 'default',
    }),
    size: createEditorSelectProp({
      label: 'ขนาดปุ่ม',
      options: [
        {
          label: 'ใหญ่',
          value: 'large',
        },
        {
          label: 'กลาง',
          value: 'normal',
        },
        {
          label: 'เล็ก',
          value: 'small',
        },
        {
          label: 'เล็กมาก',
          value: 'mini',
        },
      ],
      defaultValue: 'normal',
    }),
    'native-type': createEditorSelectProp({
      label: 'พิมพ์แอตทริบิวต์ของปุ่มเนทิฟ',
      options: [
        { label: 'ปุ่มธรรมดา', value: 'button' },
        {
          label: 'ปุ่มส่งแบบฟอร์ม',
          value: 'submit',
        },
        {
          label: 'ปุ่มรีเซ็ตแบบฟอร์ม',
          value: 'reset',
        },
      ],
      defaultValue: 'button',
    }),
    to: createEditorInputProp({ label: 'เส้นทางกระโดด' }),
    url: createEditorInputProp({ label: 'ลิงค์กระโดด' }),
    plain: createEditorSwitchProp({ label: 'ไม่ว่าจะเป็นปุ่มธรรมดา' }),
    replace: createEditorSwitchProp({ label: 'ไม่ว่าจะแทนที่ประวัติหน้าปัจจุบันเมื่อกระโดด' }),
    round: createEditorSwitchProp({ label: 'ไม่ว่าจะเป็นปุ่มกลมๆ' }),
    square: createEditorSwitchProp({ label: 'ไม่ว่าจะเป็นปุ่มสี่เหลี่ยม' }),
    block: createEditorSwitchProp({ label: 'ไม่ว่าจะเป็นองค์ประกอบระดับบล็อก', defaultValue: false }),
    color: createEditorInputProp({
      label: 'สีของปุ่ม',
      tips: 'สีของปุ่ม，ไล่ระดับสี',
    }),
    disabled: createEditorSwitchProp({ label: 'ไม่ว่าจะปิดการใช้งานปุ่ม' }),
    hairline: createEditorSwitchProp({ label: 'ใช้หรือไม่ 0.5px กรอบ' }),
    icon: createEditorInputProp({ label: 'ชื่อไอคอนหรือลิงค์รูปภาพทางด้านซ้าย' }),
    'icon-position': createEditorSelectProp({
      label: 'ตำแหน่งไอคอน',
      options: [
        {
          label: 'ด้านซ้าย',
          value: 'left',
        },
        {
          label: 'ขวา',
          value: 'right',
        },
      ],
    }),
    'icon-prefix': createEditorInputProp({
      label: '图标类名前缀',
      tips: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
    }),
    loading: createEditorSwitchProp({ label: '是否显示为加载状态' }),
    'loading-size': createEditorInputProp({ label: '加载图标大小' }),
    'loading-text': createEditorInputProp({ label: '加载状态提示文字' }),
    'loading-type': createEditorSelectProp({
      label: '加载图标类型',
      options: [
        { label: 'circular', value: 'circular' },
        { label: 'spinner', value: 'spinner' },
      ],
      defaultValue: 'circular',
    }),
  },
} as VisualEditorComponent;
