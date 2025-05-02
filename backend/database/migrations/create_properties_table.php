Schema::create('properties', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade'); // propriétaire
    $table->string('title');
    $table->text('description');
    $table->enum('type', ['location', 'vente']);
    $table->decimal('price', 12, 2);
    $table->string('address');
    $table->date('expiration_date')->nullable();
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
