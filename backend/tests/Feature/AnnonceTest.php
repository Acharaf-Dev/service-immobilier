<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Annonce;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AnnonceTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function test_user_can_create_an_annonce()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->postJson('/api/annonces', [
            'title' => 'Belle maison',
            'description' => 'Maison avec 3 chambres',
            'price' => 150000,
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('annonces', ['title' => 'Belle maison']);
    }

    /** @test */
    public function test_user_can_update_annonce()
    {
        $user = User::factory()->create();
        $annonce = Annonce::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->putJson("/api/annonces/{$annonce->id}", [
            'title' => 'Maison rénovée',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('annonces', ['title' => 'Maison rénovée']);
    }
}
