<script lang='ts'>
	import Announcement from '../../Modules/Announcement/Announcement.svelte';
import type { T_Announcement } from '../../Modules/Announcement/types';
    import data from './announcements.json';

    let annData: T_Announcement[] = data as any;
</script>

<section>
    <h2 class="[ fw-500 ] [ margin-block-end-2 ]">Announcements</h2>

    <div class="[ announcement-grid ] [ gap-3 ]">
        {#each annData as ann}
            <Announcement {ann} />
        {/each}
    </div>
</section>