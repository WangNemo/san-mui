/**
 * @file Card component
 * @author hanbingbing@baidu.com
 */

import san from 'san';
import {create} from '../common/util/cx';

const cx = create('card-actions');

export default san.defineComponent({
    template: `
        <div class="{{styleClass}}">
            <slot></slot>
        </div>
    `,
    computed: {
        styleClass() {
            return cx(this).build();
        }
    }
});
