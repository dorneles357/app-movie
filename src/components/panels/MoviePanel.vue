<template>
<div class="modal">
    <h3>{{api.name}}</h3>
    <div class="modal__header">
    <p>{{api.type}}</p>
    <p>{{api.size}}</p>
    </div>
    ...<!--TAGS-->..
    <div class="modal__footer">
    <!--Btn DELETAR e EDITAR -->
    ...
    </div>
</div> 
</template>

<script>
export default {
    name: 'MoviePanel',
    data(){
        return{
            api:
                {
                    name: "Meu primeiro video",
                    type: '.mp4',
                    size: '3mb'
                }
        }
    }

}
</script>

<style scoped>
.modal {
    max-width: 150px;
    border: 1px solid var(--color-border);
    border-radius: 4px;
}

.modal__header {
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    border-bottom: 1px solid var(--color-border);
}

.modal__footer {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid var(--color-border);
}

</style>