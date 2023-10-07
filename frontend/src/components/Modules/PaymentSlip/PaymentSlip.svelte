<script lang='ts'>
	import type { T_PaymentSlip } from "../../../stores/userStore/types";
	import Card from "../Card/Card.svelte";
	import Table from "../Table/Table.svelte";

    export let slip: T_PaymentSlip;
</script>


<section class="width-100">
    <h3 class="[ fw-500 margin-block-end-1 ]">Bill number: {slip.id}</h3>
    <Table>
        <tbody slot='tbody' class="fw-500">
            <tr>
                <th class="fw-500">Full payment</th>
                <td>{slip.fullNetToPay} USD</td>
            </tr>
            <tr>
                <th class="fw-500">Paid amount</th>
                <td>{slip.paidAmount} USD</td>
            </tr>
            <tr>
                <th class="fw-500">Amout left</th>
                <td>{slip.fullNetToPay - slip.paidAmount} USD</td>
            </tr>
            {#if slip.type === 'lbp'}
            <tr>
                <th class="fw-500">Amout equivalent</th>
                <td>{((slip.fullNetToPay - slip.paidAmount) * 15000).toLocaleString()} LL</td>
            </tr>
            {/if}
            <tr>
                <th class="fw-500">Due date</th>
                <td>{slip.due_date.toDateString()}</td>
            </tr>
        </tbody>
    </Table>
</section>